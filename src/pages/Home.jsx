import "./Home.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const contentRefs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const textContent = [
    { title: "Debby!", body: "Debby!" },
    { title: "Debby!", body: "Debby!" },
    { title: "Debby!", body: "Debby!" },
    { title: "Debby!", body: "Debby!" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleIndexes = [];

      contentRefs.current.forEach((box, index) => {
        if (box) {
          const rect = box.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

          if (isVisible) {
            newVisibleIndexes.push(index);
          }
        }
      });

      setVisibleIndexes(newVisibleIndexes);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box className="home-page">
      <Box className="navbar-box">
        <Navbar />
      </Box>

      <img src="images/nycskyline.jpg" alt="nyc" className="banner-picture" />

<Box className="home-content-block">
  {textContent.map((item, index) => (
    <Box
      key={index}
      ref={(el) => (contentRefs.current[index] = el)}
      className={`text-box ${visibleIndexes.includes(index) ? "visible" : "hidden"} ${index % 2 === 0 ? "left" : "right"}`}
      style={{ transitionDelay: `${index * 0.3}s` }}
    >
      <Typography variant="h4">{item.title}</Typography>
      <Typography variant="body1">{item.body}</Typography>
    </Box>
  ))}
    </Box>
    <Box className="footer">
            <Footer />
          </Box>
    </Box>
  );
}
