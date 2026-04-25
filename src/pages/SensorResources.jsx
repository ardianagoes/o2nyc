import { Box, Button, Typography } from "@mui/material";
import Footer from "../comp/Footer";
import Navbar from "../comp/Navbar";
import "./SensorResources.css";

export default function SensorResources() {
  const isMobile =
    typeof window !== "undefined" && window.matchMedia("(max-width: 900px)").matches;

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
          {isMobile ? (
            <Box className="sensor-resource-mobile">
              <Button
                variant="contained"
                href="/pdfs/Community Sensor Workshop.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="sensor-resource-open-button"
              >
                Open Assembly PDF
              </Button>
            </Box>
          ) : (
            <Box className="sensor-resource-embed">
              <iframe
                title="Sensor Assembly Instructions"
                src="/pdfs/Community Sensor Workshop.pdf"
                className="sensor-resource-iframe"
              />
            </Box>
          )}
        </Box>

        <Box className="sensor-resource-section">
          <Typography variant="h4" component="h2" className="sensor-resource-heading">
            Sensor Software Setup
          </Typography>
          {isMobile ? (
            <Box className="sensor-resource-mobile">
              <Button
                variant="contained"
                href="/pdfs/O2 Sensor Software Setup.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="sensor-resource-open-button"
              >
                Open Software Setup PDF
              </Button>
            </Box>
          ) : (
            <Box className="sensor-resource-embed">
              <iframe
                title="Sensor Software Setup"
                src="/pdfs/O2 Sensor Software Setup.pdf"
                className="sensor-resource-iframe"
              />
            </Box>
          )}
        </Box>
      </Box>

      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
}

