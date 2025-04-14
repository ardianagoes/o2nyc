import "./Home.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [content, setContent] = useState([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/homeImages.json');  
      const data = await response.json();
      setContent(data);
    };

    fetchContent();

    const handleScroll = () => {
      setVisibleIndexes((prevVisibleIndexes) => {
        const newVisibleIndexes = [...prevVisibleIndexes];

        contentRefs.current.forEach((box, index) => {
          if (box) {
            const rect = box.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
            if (isVisible && !prevVisibleIndexes.includes(index)) {
              newVisibleIndexes.push(index);
            }
          }
        });

        return newVisibleIndexes;
      });
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
        {content.map((item, index) => (
          <Box
            key={index}
            ref={(el) => (contentRefs.current[index] = el)}
            className={`text-with-image ${index % 2 === 0 ? "left" : "right"}`}
          >
            <Box
              className={`text-box ${visibleIndexes.includes(index) ? "visible" : "hidden"}`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="body1">{item.body}</Typography>
            </Box>

            <Box
              className={`image-box ${visibleIndexes.includes(index) ? "visible" : "hidden"}`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className={`transition-image ${visibleIndexes.includes(index) ? "visible" : "hidden"}`}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
}
