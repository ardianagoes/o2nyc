import { Box, Typography } from "@mui/material";
import Footer from "../comp/Footer";
import Navbar from "../comp/Navbar";
import "./SensorResources.css";

export default function SensorResources() {
  return (
    <Box className="sensor-resources-page">
      <Box className="navbar-box">
        <Navbar />
      </Box>

      <Box className="sensor-resources-content">
        <Box className="sensor-resources-title-container">
          <Typography variant="h3" component="h1" className="page-title sensor-resources-title">
            Sensor Resources
          </Typography>
        </Box>

        <Box className="sensor-resource-section">
          <Typography variant="h4" component="h2" className="sensor-resource-heading">
            Sensor Assembly Instructions
          </Typography>
          <Box className="sensor-resource-embed">
            <iframe
              title="Sensor Assembly Instructions"
              src="/pdfs/Community Sensor Workshop.pdf"
              className="sensor-resource-iframe"
            />
          </Box>
        </Box>

        <Box className="sensor-resource-section">
          <Typography variant="h4" component="h2" className="sensor-resource-heading">
            Sensor Software Setup
          </Typography>
          <Box className="sensor-resource-embed">
            <iframe
              title="Sensor Software Setup"
              src="/pdfs/O2 Sensor Software Setup.pdf"
              className="sensor-resource-iframe"
            />
          </Box>
        </Box>
      </Box>

      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
}

