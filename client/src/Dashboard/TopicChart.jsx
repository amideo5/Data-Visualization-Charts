import React, {useState} from 'react';
import { PolarArea } from 'react-chartjs-2';
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

const TopicsPolarAreaChart = ({ data }) => {
  const countries = [...new Set(data.map(entry => entry.country))];
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
  };

  const filteredData = data.filter(entry => {
    return (!selectedCountry || entry.country === selectedCountry);
  });

  const topics = filteredData.map(item => item.topic);

  const chartData = {
    labels: topics,
    datasets: [
      {
        data: filteredData.map(item => item.relevance),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
      },
    },
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Topics Chart
      </Heading>
      <DropdownFilter
        options={countries.map(country => ({ value: country, label: country }))}
        selectedOption={selectedCountry}
        onOptionChange={handleCountryChange}
      />
      <PolarArea data={chartData} options={chartOptions} />
    </Box>
  );
};

export default TopicsPolarAreaChart;
