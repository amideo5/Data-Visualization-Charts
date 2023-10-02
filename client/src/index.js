import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./app"; 
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>,
  document.getElementById("root")
);
