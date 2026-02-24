import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../comp/Footer";
import Navbar from "../comp/Navbar";
import "./Staff.css";

export default function Volunteers() {
  const [volunteerData, setVolunteerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/volunteers.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} for volunteers`);
        }
        const data = await response.json();
        setVolunteerData(data);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Failed to load volunteer data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Box className="staff-page" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress sx={{ color: 'white' }} />
        <Typography variant="h6" sx={{ ml: 2, color: 'white' }}>loading volunteer data...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="staff-page" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <Typography variant="h5" color="error">{error}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: 'white' }}>error...</Typography>
      </Box>
    );
  }

  return (
    <Box className="staff-page">
      <Navbar />
      <Box className="about-content">
        <Box className="heads-title-box">
          <Typography variant="h3" component="h1" className="staff-title">
            Meet Our Volunteers
          </Typography>
        </Box>
        <Box className="team-display-area loaded">
          <Box className="staff-members-row">
            {volunteerData.map((member) => (
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
