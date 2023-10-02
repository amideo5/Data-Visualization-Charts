import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const CityChart = ({ data }) => {
  
  const cityCounts = {};
  data.forEach(item => {
    if (item.city in cityCounts) {
      cityCounts[item.city]++;
    } else {
      cityCounts[item.city] = 1;
    }
  });

  const chartData = {
    labels: Object.keys(cityCounts),
    datasets: [
      {
        data: Object.values(cityCounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
      },
    ],
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        City Distribution
      </Heading>
      <Bar data={chartData} />
    </Box>
  );
};

export default CityChart;
