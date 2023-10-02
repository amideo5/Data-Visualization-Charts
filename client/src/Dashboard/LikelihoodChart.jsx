import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import { Box, useColorModeValue, Heading } from "@chakra-ui/react";

const DropdownFilter = ({ options, selectedOption, onOptionChange }) => {
  return (
    <select value={selectedOption} onChange={onOptionChange}>
      <option value="">All Countries</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const LikelihoodRadarChart = ({ data }) => {
  const countries = [...new Set(data.map(entry => entry.country))];
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
  };

  const filteredData = data.filter(entry => {
    return (!selectedCountry || entry.country === selectedCountry);
  });

  const chartData = {
    labels: filteredData.map((entry) => entry.country),
    datasets: [
      {
        label: "Likelihood",
        data: filteredData.map((entry) => entry.likelihood),
        backgroundColor: useColorModeValue(
          "rgba(79, 59, 169, 0.7)",
          "rgba(144, 104, 190, 0.7)"
        ),
        borderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
        borderWidth: 2,
        pointBackgroundColor: useColorModeValue("white", "black"),
        pointBorderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  };

  

  return (
    <Box
      borderRadius={20}
      pt={6}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700} 
      overflow="hidden" 
    >
      <Heading as="h2" mb={4} ml={6}>
        Likelihood Chart
      </Heading>

      <DropdownFilter
        options={countries.map(country => ({ value: country, label: country }))}
        selectedOption={selectedCountry}
        onOptionChange={handleCountryChange}
      />

      <Radar data={chartData} options={chartOptions} />
    </Box>
  );
};

export default LikelihoodRadarChart;
