import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../comp/Footer";
import Navbar from "../comp/Navbar";
import "./Staff.css";

export default function Staff() {
  const [staffData, setStaffData] = useState([]);
  const [managerData, setManagerData] = useState([]);
  const [headsData, setHeadsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {

        setLoading(true);
        setError(null);

        const headsResponse = await fetch('/heads.json');
        if (!headsResponse.ok) {
          throw new Error(`HTTP error! Status: ${headsResponse.status} for heads`);
        }
        const heads = await headsResponse.json();
        setHeadsData(heads);

        const managerResponse = await fetch('/manager.json');
        if (!managerResponse.ok) {
          throw new Error(`HTTP error! Status: ${managerResponse.status} for managers`);
        }
        const managers = await managerResponse.json();
        setManagerData(managers);

        const staffResponse = await fetch('/staff.json');
        if (!staffResponse.ok) {
          throw new Error(`HTTP error! Status: ${staffResponse.status} for staff`);
        }
        const staff = await staffResponse.json();
        setStaffData(staff);

      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Failed to load team data. Please try again later.");
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
        <Typography variant="h6" sx={{ ml: 2, color: 'white' }}>loading team data...</Typography>
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
            Meet Our Heads
          </Typography>
        </Box>
        <Box className="team-display-area loaded">
          <Box className="staff-members-row">
            {headsData.map((member) => (
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
        <Box className="manager-title-box">
          <Typography variant="h3" component="h1" className="staff-title">
            Meet Our Managers
          </Typography>
        </Box>
        <Box className="team-display-area loaded">
          <Box className="staff-members-row">
            {managerData.map((member) => (
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