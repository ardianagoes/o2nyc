import "./Staff.css";
import { Box, CircularProgress, Typography } from "@mui/material";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import React, { useState, useEffect } from "react";

export default function Staff() {
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/staff.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setStaffData(data);
      } catch (err) {
        console.error("Failed to fetch staff data:", err);
        setError("Failed to load staff data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchStaffData();
  }, []);

  if (loading) { /* ... */ }
  if (error) { /* ... */ }

  return (
    <Box className="staff-page">
      <Navbar />
      <Box className="about-content">
        <Box className="staff-title-box">
          <Typography variant="h3" component="h1" className="staff-title">
            Meet Our Staff
          </Typography>
        </Box>
        <Box className="team-display-area loaded">
          <Box className="staff-members-row">
            {staffData.map((member) => (
              <Box key={member.id} className="member-card">
                <Box className="member-image-container">
                  <img
                    src={member.imageUrl}
                    alt={`${member.name} - ${member.role}`}
                    className="member-image"
                    onError={(e) => {
                      e.target.src = "/images/team/placeholder.png";
                    }}
                  />
                </Box>
                <Typography variant="body1" component="p" className="member-role">
                  {member.role}
                </Typography>
                <Typography variant="h6" component="h3" className="member-name">
                  {member.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}