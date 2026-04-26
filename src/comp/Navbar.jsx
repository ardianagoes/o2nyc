import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton, Link } from "@mui/material";
import { useEffect, useState } from "react";
import "./Navbar.css";

const GOOGLE_FORM_URL = "https://forms.gle/12Fkbe73fsZ3w2Fg7";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      const currentScrollY = window.scrollY;
      const threshold = 50; 

      if (currentScrollY < threshold) {
        setScrolling(false);
      }
      else if (currentScrollY > lastScrollY) {
        setScrolling(true); 
      } else {
        setScrolling(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
    setIsProjectsOpen(false);
  };

  return (
    <>
      <Box className={`navbar ${scrolling ? "navbar-scrolled" : ""}`}>
        <Box className="navbar-container">
          <Box className="navbar-left">
            <Box className="logo-container">
              <Link href="/">
                <img src="/images/logo.png" alt="logo" className="website-logo" />
              </Link>
            </Box>
          </Box>

          <Box className="desktop-nav" aria-label="Primary navigation">
            <Link href="/" className="desktop-nav-link">
              Home
            </Link>

            <Box className="desktop-nav-item desktop-nav-dropdown" tabIndex={0}>
              <span className="desktop-nav-link desktop-nav-trigger">About Us</span>
              <Box className="desktop-nav-menu" role="menu" aria-label="About Us">
                <Link href="/board" className="desktop-nav-menu-item" role="menuitem">
                  Board
                </Link>
                <Link href="/staff" className="desktop-nav-menu-item" role="menuitem">
                  Staff
                </Link>
                <Link href="/volunteers" className="desktop-nav-menu-item" role="menuitem">
                  Volunteers
                </Link>
              </Box>
            </Box>

            <Box className="desktop-nav-item desktop-nav-dropdown" tabIndex={0}>
              <span className="desktop-nav-link desktop-nav-trigger">Project</span>
              <Box className="desktop-nav-menu" role="menu" aria-label="Project">
                <Link href="/community-sensor-project" className="desktop-nav-menu-item" role="menuitem">
                  Community Sensor Project
                </Link>
                <Link href="/sensor-workshops" className="desktop-nav-menu-item" role="menuitem">
                  Sensor Workshops
                </Link>
              </Box>
            </Box>

            <Link href="/sensor-resources" className="desktop-nav-link">
              Sensor Resources
            </Link>

            <Link href="/contact" className="desktop-nav-link">
              Get Involved
            </Link>
          </Box>

          <Box className="navbar-right">
            {!scrolling && (
              <Box className="navbar-inline-menu">
                <IconButton
                  className="navbar-inline-menu-button"
                  aria-label="open navigation menu"
                  aria-expanded={isMenuOpen ? "true" : "false"}
                  onClick={handleMenuToggle}
                >
                  {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                <Box className={`navbar-dropdown ${isMenuOpen ? "open" : ""}`}>
                  <Link href="/" className="navbar-dropdown-item" onClick={handleMenuClose}>
                    Home
                  </Link>
                  <Box
                    className="navbar-dropdown-item navbar-dropdown-parent"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isAboutOpen ? "true" : "false"}
                    onClick={() => setIsAboutOpen((v) => !v)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setIsAboutOpen((v) => !v);
                    }}
                  >
                    <span>About Us</span>
                    <span className="navbar-dropdown-caret">{isAboutOpen ? "▴" : "▾"}</span>
                  </Box>
                  {isAboutOpen && (
                    <Box className="navbar-dropdown-submenu">
                      <Link href="/board" className="navbar-dropdown-subitem" onClick={handleMenuClose}>
                        Board
                      </Link>
                      <Link href="/staff" className="navbar-dropdown-subitem" onClick={handleMenuClose}>
                        Staff
                      </Link>
                      <Link
                        href="/volunteers"
                        className="navbar-dropdown-subitem"
                        onClick={handleMenuClose}
                      >
                        Volunteers
                      </Link>
                    </Box>
                  )}
                  <Box
                    className="navbar-dropdown-item navbar-dropdown-parent"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isProjectsOpen ? "true" : "false"}
                    onClick={() => setIsProjectsOpen((v) => !v)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setIsProjectsOpen((v) => !v);
                    }}
                  >
                    <span>Project</span>
                    <span className="navbar-dropdown-caret">{isProjectsOpen ? "▴" : "▾"}</span>
                  </Box>
                  {isProjectsOpen && (
                    <Box className="navbar-dropdown-submenu">
                      <Link
                        href="/community-sensor-project"
                        className="navbar-dropdown-subitem"
                        onClick={handleMenuClose}
                      >
                        Community Sensor Project
                      </Link>
                      <Link
                        href="/sensor-workshops"
                        className="navbar-dropdown-subitem"
                        onClick={handleMenuClose}
                      >
                        Sensor Workshops
                      </Link>
                    </Box>
                  )}
                  <Link
                    href="/sensor-resources"
                    className="navbar-dropdown-item"
                    onClick={handleMenuClose}
                  >
                    Sensor Resources
                  </Link>
                  <Link href="/contact" className="navbar-dropdown-item" onClick={handleMenuClose}>
                    Get Involved
                  </Link>
                  <Link
                    href={GOOGLE_FORM_URL}
                    className="navbar-dropdown-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleMenuClose}
                  >
                    Contact Us
                  </Link>
                </Box>
              </Box>
            )}
            <Button
              variant="contained"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-contact-button desktop-only"
              size="small"
              sx={{
                backgroundColor: "#2A7C7A",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                padding: "0.6rem 14px",
                borderRadius: "999px",
                textTransform: "none",
                boxShadow: "0 2px 5px rgba(0,0,0,0.35)",
                transition: "background-color 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  backgroundColor: "#1f6c69",
                  transform: "translateY(-1px)",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={`navbar-fab ${scrolling ? "navbar-fab-visible" : ""}`}>
        <IconButton
          className="navbar-fab-button"
          aria-label="open navigation menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Box className={`navbar-dropdown ${isMenuOpen ? "open" : ""}`}>
          <Link href="/" className="navbar-dropdown-item" onClick={handleMenuClose}>
            Home
          </Link>
          <Box
            className="navbar-dropdown-item navbar-dropdown-parent"
            role="button"
            tabIndex={0}
            aria-expanded={isAboutOpen ? "true" : "false"}
            onClick={() => setIsAboutOpen((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setIsAboutOpen((v) => !v);
            }}
          >
            <span>About Us</span>
            <span className="navbar-dropdown-caret">{isAboutOpen ? "▴" : "▾"}</span>
          </Box>
          {isAboutOpen && (
            <Box className="navbar-dropdown-submenu">
              <Link href="/board" className="navbar-dropdown-subitem" onClick={handleMenuClose}>
                Board
              </Link>
              <Link href="/staff" className="navbar-dropdown-subitem" onClick={handleMenuClose}>
                Staff
              </Link>
              <Link href="/volunteers" className="navbar-dropdown-subitem" onClick={handleMenuClose}>
                Volunteers
              </Link>
            </Box>
          )}
          <Box
            className="navbar-dropdown-item navbar-dropdown-parent"
            role="button"
            tabIndex={0}
            aria-expanded={isProjectsOpen ? "true" : "false"}
            onClick={() => setIsProjectsOpen((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setIsProjectsOpen((v) => !v);
            }}
          >
            <span>Project</span>
            <span className="navbar-dropdown-caret">{isProjectsOpen ? "▴" : "▾"}</span>
          </Box>
          {isProjectsOpen && (
            <Box className="navbar-dropdown-submenu">
              <Link
                href="/community-sensor-project"
                className="navbar-dropdown-subitem"
                onClick={handleMenuClose}
              >
                Community Sensor Project
              </Link>
              <Link
                href="/sensor-workshops"
                className="navbar-dropdown-subitem"
                onClick={handleMenuClose}
              >
                Sensor Workshops
              </Link>
            </Box>
          )}
          <Link href="/sensor-resources" className="navbar-dropdown-item" onClick={handleMenuClose}>
            Sensor Resources
          </Link>
          <Link href="/contact" className="navbar-dropdown-item" onClick={handleMenuClose}>
            Get Involved
          </Link>
          <Link
            href={GOOGLE_FORM_URL}
            className="navbar-dropdown-item"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}
          >
            Contact Us
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;