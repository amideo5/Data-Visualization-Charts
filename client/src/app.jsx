import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Dashboard/Main";

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;
  