import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import LikelihoodRadarChart from "./LikelihoodChart";
import RelevanceBubbleChart from "./Relevance";
import CountryChart from "./Country";
import TopicsRadarChart from "./TopicChart";
import RegionChart from "./RegionChart";
import CityChart from "./City";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { ChakraProvider, Flex, Box, Grid } from "@chakra-ui/react";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/data/`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <ChakraProvider>
      <IntensityChart data={data} />
      <LikelihoodRadarChart data={data} />
      <RelevanceBubbleChart data={data} />
      <CountryChart data={data} />
      <TopicsRadarChart data={data} />
      <RegionChart data={data} />
      <CityChart data={data} />
    </ChakraProvider>
  );
};

export default Main;
