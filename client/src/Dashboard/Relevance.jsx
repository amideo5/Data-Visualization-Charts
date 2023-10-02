import React, { useState } from 'react';
import { Bubble } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

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

const RelevanceBubbleChart = ({ data }) => {
  const countries = [...new Set(data.map(entry => entry.country))];
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
  };

  const filteredData = data.filter(entry => {
    return (!selectedCountry || entry.country === selectedCountry);
  });

  const chartData = {
    datasets: [
      {
        label: 'Relevance',
        data: filteredData.map(item => ({
          x: item.likelihood,
          y: item.impact,
          r: item.relevance * 5
        }),
        )
      },
      {
        label: 'Intensity',
        data: filteredData.map(item => ({
          x: item.likelihood,
          y: item.impact,
          r: item.intensity,
        }),
        )
      }
    ]
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Likelihood',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Impact',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <Box margin={50} p={4} mt={8} borderRadius={18} boxShadow ='0px 0px 10px rgba(0, 0, 0, 0.1)'>
      <Heading as="h2" mb={4}>Relevance Chart</Heading>
      <DropdownFilter
        options={countries.map(country => ({ value: country, label: country }))}
        selectedOption={selectedCountry}
        onOptionChange={handleCountryChange}
      />
      
      <Bubble data={chartData} options={chartOptions} />
    </Box>
  );
};

export default RelevanceBubbleChart;