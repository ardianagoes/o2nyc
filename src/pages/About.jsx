import "./About.css";
import { Box, CircularProgress, Typography } from "@mui/material";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import React, { useState, useEffect } from "react"; 

export default function About() {
  const [teamData, setTeamData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/members.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTeamData(data);
      } catch (err) {
        console.error("Failed to fetch team data:", err);
        setError("Failed to load team data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchTeamData();
  }, []); 

  if (loading) {
    return (
      <Box className="about-page">
        <Box className="navbar-box">
          <Navbar />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}>
          <CircularProgress color="inherit" />
        </Box>
        <Box className="footer">
          <Footer />
        </Box>
      </Box>
    );
  }
  return (
    <Box className="about-page">
      <Box className="navbar-box">
        <Navbar />
      </Box>
      <Box className="about-content">
      <Box className="title-box">
      <Typography variant="h3" component="h1" className="page-title about-title">
        Who We Are
      </Typography>
      </Box>
      <Box className="about-intro-section">
          <Typography variant="body1" component="p" className="about-intro-text" sx={{ mb: 5}}> 
            O2-NYC is a New York City-based non-profit run entirely by high school students with the goal of giving people the tools they need to advocate for climate action in their communities.
          </Typography>
          <Typography variant="body1" component="p" className="about-intro-text" sx={{ mb: 5 }}> 
            Our journey began as a small group of friends driven by a shared passion to fight environmental injustices. Initially, we aimed to create a platform where people could explore how environmental issues directly impact their local communities. However, we quickly uncovered a significant gap—many areas lacked accessible environmental data altogether.
          </Typography>
          <Typography variant="body1" component="p" className="about-intro-text"> 
            Determined to bridge this gap, we founded O2-NYC to design affordable air quality sensors and deploy them in as many locations as possible, empowering communities with the tools to understand and address air quality concerns.
          </Typography>
        </Box>
      {error ? (
        <Typography color="error" align="center" sx={{ my: 4 }}>
          {error}
        </Typography>
      ) : (
        <Box className="team-display-area loaded">
          {Object.entries(teamData).map(([role, members]) => (
            <Box key={role} className="team-role-section">
              <Typography variant="h4" component="h2" className="role-title">
                {role}
              </Typography>
              <Box className="members-row">
                {members.map((member) => (
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
                    <Typography variant="h6" component="h3" className="member-name">
                      {member.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      )}
      </Box>
      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
}