import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Staff from "./pages/Staff";
import Contact from "./pages/Contact";
import CommunitySensorProject from "./pages/CommunitySensorProject"; 
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Clarity from '@microsoft/clarity';

const App = () => {
  const projectId = "rtghfscrdv"
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    if (projectId && Clarity && typeof Clarity.init === 'function') {
      Clarity.init(projectId);
      console.log("Microsoft Clarity initialized with project ID:", projectId);
    } else {
      console.error("Microsoft Clarity projectId is missing or Clarity.init is not a function.");
    }
  }, [projectId]);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box style={{ height: windowHeight }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/board" element={<About />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community-sensor-project" element={<CommunitySensorProject />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </Box>
  );
};
export default App;