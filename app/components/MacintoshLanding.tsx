import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faLaptopCode,
  faFileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import logo from "../assets/logo/logo(light).png";
import "../styles/MacintoshLanding.css";

const MacintoshLanding = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  interface FormatTimeOptions {
    hour: "2-digit";
    minute: "2-digit";
    hour12: boolean;
  }

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    } as FormatTimeOptions);
  };

  interface App {
    name: string;
    icon: any; // FontAwesome IconDefinition
    path: string;
  }

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  interface HandleAppClickProps {
    path: string;
  }

  const handleAppClick = (path: HandleAppClickProps["path"]): void => {
    if (path === "/contact") {
      setShowContactForm(true);
    } else {
      navigate(path);
    }
  };

  const handleCloseContact = () => {
    setShowContactForm(false);
  };

  const desktopApps = [
    { name: "Mindset", icon: faUser, path: "/mindset" },
    { name: "Skillset", icon: faCog, path: "/skillset" },
    { name: "Projects", icon: faLaptopCode, path: "/projects" },
    // { name: "Resume", icon: faFileAlt, path: "/resume" },
    { name: "Contact", icon: faEnvelope, path: "/contact" },
  ];

  const mobileApps = [
    { name: "About", icon: faUser, path: "/mindset" },
    { name: "Projects", icon: faLaptopCode, path: "/projects" },
    // { name: "Resume", icon: faFileAlt, path: "/resume" },
    { name: "Toolkit", icon: faCog, path: "/skillset" },
    { name: "Contact", icon: faEnvelope, path: "/contact" },
    // { name: "Media", icon: "📷", path: "/projects" },
    // { name: "Settings", icon: "⚙️", path: "/mindset" },
    // { name: "Messages", icon: "💬", path: "/mindset" },
    // { name: "Calendar", icon: "📅", path: "/resume" },
  ];

  if (isMobile) {
    return (
      <div className="iphone-container">
        <div className="iphone-screen">
          <div className="status-bar">
            <span className="carrier">Demaceo</span>
            <span className="time">{formatTime(currentTime)}</span>
            <span className="battery">🔋</span>
          </div>

          <div className="wallpaper">
            <div className="home-apps">
              {mobileApps.map((app) => (
                <button
                  key={app.name}
                  className="app-icon"
                  type="button"
                  onClick={() => handleAppClick(app.path)}
                  tabIndex={0}
                  aria-label={app.name}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleAppClick(app.path);
                    }
                  }}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={app.icon} />
                  </span>
                  <span className="app-name">{app.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="dock-mobile">
            <button
              className="dock-app"
              type="button"
              onClick={() => handleAppClick("/projects")}
              tabIndex={0}
              aria-label="Projects"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleAppClick("/projects");
                }
              }}
            >
              <FontAwesomeIcon icon={faLaptopCode} />
            </button>
            <button
              className="dock-app"
              type="button"
              onClick={() => handleAppClick("/mindset")}
              tabIndex={0}
              aria-label="About Me"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleAppClick("/mindset");
                }
              }}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button
              className="dock-app"
              type="button"
              onClick={() => handleAppClick("/resume")}
              tabIndex={0}
              aria-label="Resume"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleAppClick("/resume");
                }
              }}
            >
              <FontAwesomeIcon icon={faFileAlt} />
            </button>
          </div>
        </div>

        {showContactForm && (
          <div className="contact-overlay">
            <div className="contact-window">
              <div className="contact-header">
                <button className="close-contact" onClick={handleCloseContact}>
                  ✕
                </button>
              </div>
              <div className="contact-content">
                <ContactForm onClose={handleCloseContact} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="macintosh-container">
      <div className="mac-screen">
        <div className="menu-bar">
          <div className="menu-left">
            <img className="apple-logo" alt="portfolio-logo" src={logo} />
            <span className="menu-item">File</span>
            <span className="menu-item">Edit</span>
            <span className="menu-item">View</span>
            <span className="menu-item">Special</span>
          </div>
          <div className="menu-right">
            <span className="time">{formatTime(currentTime)}</span>
            <span className="date">{formatDate(currentTime)}</span>
          </div>
        </div>

        <div className="desktop">
          <div className="desktop-items">
            {desktopApps.map((app) => (
              <button
                key={app.name}
                className="desktop-icon"
                type="button"
                onClick={() => handleAppClick(app.path)}
                tabIndex={0}
                aria-label={app.name}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleAppClick(app.path);
                  }
                }}
              >
                <div className="icon-image">
                  <FontAwesomeIcon icon={app.icon} />
                </div>
                <span className="icon-label">{app.name}</span>
              </button>
            ))}
          </div>

          <div className="welcome-window">
            <div className="window-title-bar">
              <div className="window-controls">
                <div className="close-btn"></div>
              </div>
              <span className="window-title">Welcome to My Portfolio</span>
            </div>
            <div className="window-content">
              <h2>Hello, I'm Demaceo Vincent</h2>
              <p>
                Click on the icons to explore my work, learn about me, and how best to reach out.
              </p>
              <div className="quick-links">
                <button onClick={() => handleAppClick("/mindset")}>
                  About Me
                </button>
                <button onClick={() => handleAppClick("/projects")}>
                  View Projects
                </button>
                <button onClick={() => handleAppClick("/contact")}>
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="taskbar">
          <div className="start-menu">Machina Ex Demaceo</div>
          <div className="running-apps">
            <div className="app-tab active">Finder</div>
            <div className="app-tab">Portfolio</div>
          </div>
        </div>
      </div>

      {showContactForm && (
        <div className="contact-overlay">
          <div className="contact-window">
            <div className="contact-header">
              <span>Contact Me</span>
              <button className="close-contact" onClick={handleCloseContact}>
                ✕
              </button>
            </div>
            <div className="contact-content">
              <ContactForm onClose={handleCloseContact} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MacintoshLanding;
