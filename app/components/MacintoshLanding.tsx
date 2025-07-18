import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faLaptopCode,
  faEnvelope,
  faBriefcase,
  faPaw,
  faTheaterMasks,
  faRobot,
  faMusic,
  faCookieBite,
  faFilm,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import QuirkyModal from "./QuirkyModal";
import RandomButton from "./RandomButton";
import logo from "../assets/logo/PORTFOLIO_LOGO.png";
import projectData from "../utilities/projectData";
import "../styles/MacintoshLanding.css";

const MacintoshLanding = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [menuQuirks, setMenuQuirks] = useState({
    fileClicks: 0,
    editShake: false,
    viewInverted: false,
    specialRainbow: false,
  });
  const [modalState, setModalState] = useState({
    isOpen: false,
    message: "",
    type: "file" as "file" | "edit" | "view" | "special",
    showRandomButton: false,
  });
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
    } else if (path.startsWith("http")) {
      // External URL - open in new tab
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };

  const handleCloseContact = () => {
    setShowContactForm(false);
  };

  // Quirky menu item handlers
  const showModal = (
    message: string,
    type: "file" | "edit" | "view" | "special",
    showRandomButton = false
  ) => {
    setModalState({ isOpen: true, message, type, showRandomButton });
  };

  const handleRandomButtonClick = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
      showRandomButton: false,
    }));
  };

  const handleFileClick = () => {
    const newCount = menuQuirks.fileClicks + 1;
    setMenuQuirks((prev) => ({ ...prev, fileClicks: newCount }));

    const messages = [
      "Is this a bug? Or a feature? 🤔",
      "Hey there, good to see you again..",
      "🎪 Welcome to the digital circus! 🎪",
      "Plot twist: There are no files.",
      "Files? Where we're going, we don't need files!",
      `🎉 File click #${newCount}! You're persistent, I like that! 🃏`,
      // "You've unlocked the secret file dimension..",
    ];

    if (newCount <= messages.length) {
      showModal(messages[newCount - 1], "file");
    } else {
      // Special case: Show "And then?" modal with random button
      showModal("And then?", "file", true);
    }
  };

  const handleEditClick = () => {
    setMenuQuirks((prev) => ({ ...prev, editShake: true }));
    showModal("Nope! You can't edit perfection 🤭", "edit");

    setTimeout(() => {
      setMenuQuirks((prev) => ({ ...prev, editShake: false }));
    }, 1000);
  };

  const handleViewClick = () => {
    setMenuQuirks((prev) => ({ ...prev, viewInverted: !prev.viewInverted }));
    const message = menuQuirks.viewInverted
      ? "🙂 Back to normal view! Everything is as it once was again now!..?"
      : "🙃 Welcome to the upside-down inside-out view! Everything is as it is now!";
    showModal(message, "view");
  };

  const handleSpecialClick = () => {
    setMenuQuirks((prev) => ({
      ...prev,
      specialRainbow: !prev.specialRainbow,
    }));
    const messages = [
      "✨ Special Effects: ACTIVATED 👊😎",
      "🎊 it's PARTY TIME! 🎭",
      "🪩 Disco Mode: ENGAGED 🕺",
    ];
    showModal(messages[Math.floor(Math.random() * messages.length)], "special");

    // Auto-disable rainbow after 10 seconds
    if (!menuQuirks.specialRainbow) {
      setTimeout(() => {
        setMenuQuirks((prev) => ({ ...prev, specialRainbow: false }));
      }, 10000);
    }
  };

  const desktopApps = [
    { name: "Mindset", icon: faUser, path: "/mindset" },
    { name: "Skillset", icon: faCog, path: "/skillset" },
    { name: "Projects", icon: faLaptopCode, path: "/projects" },
    // { name: "Resume", icon: faFileAlt, path: "/resume" },
    { name: "Contact", icon: faEnvelope, path: "/contact" },
  ];

  const mobileApps = projectData
    .filter((project) => !project.archived)
    .slice(0, 6)
    .map((project) => {
      // Map project icons to FontAwesome icons
      let icon: IconDefinition | undefined;
      let image = project.image || "";
      if (project.icon === "fas fa-briefcase icon") {
        icon = faBriefcase;
      } else if (project.icon === "fa fa-paw icon") {
        icon = faPaw;
      } else if (project.id === 1 || project.id === 0) {
        image = project.image;
      // } else if (project.icon === "fas fa-robot icon") {
      //   icon = faRobot;
      // } else if (project.icon === "fas fa-music icon") {
      //   icon = faMusic;
      // } else if (project.icon === "fas fa-cookie-bite icon") {
      //   icon = faCookieBite;
      // } else if (project.icon === "fas fa-film icon") {
      //   icon = faFilm;
      } else {
        // Default icon for projects without specific icons
        icon = faLaptopCode;
      }

      return {
        name: project.name,
        icon: icon,
        image,
        path: project.link.startsWith("http")
          ? project.link
          : `/project/${project.id}`,
      };
    });

  if (isMobile) {
    return (
      <div className="iphone-container">
        <div className="iphone-screen">
          <div className="status-bar">
            <img className="carrier" alt="portfolio-logo" src={logo} />
            <span className="time">{formatTime(currentTime)}</span>
          </div>

          <div className="wallpaper">
            <div className="mobile-welcome-window">
              <div className="mobile-window-title-bar">
                <div className="mobile-window-controls">
                  <div className="mobile-close-btn"></div>
                </div>
                <span className="mobile-window-title">Welcome</span>
              </div>
              <div className="mobile-window-content">
                {/* <h2>Demaceo Vincent</h2> */}
                <p>Explore my work & get in touch.</p>
              </div>
            </div>

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
                    {app.icon && typeof app.icon !== "number" && (
                      <FontAwesomeIcon icon={app.icon} />
                    )}
                    {app.image && <img className="app-image" src={app.image} alt={app.name} />}
                  </span>
                  <span className="app-name">{app.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="page-indicators">
            <div className="page-dot active"></div>
            <div className="page-dot"></div>
          </div>

          <div className="dock-mobile">
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
              onClick={() => handleAppClick("/contact")}
              tabIndex={0}
              aria-label="Contact"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleAppClick("/contact");
                }
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
        </div>

        {showContactForm && (
          <div className="contact-content">
            <ContactForm onClose={handleCloseContact} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="macintosh-container">
      <div
        className={`mac-screen ${
          menuQuirks.editShake ? "shake-animation" : ""
        } ${menuQuirks.viewInverted ? "inverted-view" : ""}`}
        style={{
          filter: menuQuirks.specialRainbow ? "hue-rotate(0deg)" : "none",
          animation: menuQuirks.specialRainbow
            ? "rainbow-cycle 2s infinite linear"
            : "none",
        }}
      >
        <div className="menu-bar">
          <div className="menu-left">
            <img className="my-logo" alt="portfolio-logo" src={logo} />
            <span
              className="menu-item"
              onClick={handleFileClick}
              style={{ cursor: "pointer" }}
              title={`Clicked ${menuQuirks.fileClicks} times!`}
            >
              File{menuQuirks.fileClicks > 0 && ` (${menuQuirks.fileClicks})`}
            </span>
            <span
              className="menu-item"
              onClick={handleEditClick}
              style={{ cursor: "pointer" }}
            >
              Edit
            </span>
            <span
              className="menu-item"
              onClick={handleViewClick}
              style={{ cursor: "pointer" }}
            >
              View
            </span>
            <span
              className="menu-item"
              onClick={handleSpecialClick}
              style={{
                cursor: "pointer",
                background: menuQuirks.specialRainbow
                  ? "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)"
                  : "transparent",
                backgroundSize: "200% 200%",
                animation: menuQuirks.specialRainbow
                  ? "rainbow-text 1s infinite linear"
                  : "none",
                color: menuQuirks.specialRainbow ? "#fff" : "inherit",
              }}
            >
              Special
            </span>
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
                Click on the icons to explore my work, learn about me, and how
                best to reach out.
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
            {/* <div className="contact-header">
              <button className="close-contact" onClick={handleCloseContact}>
                ✕
              </button>
            </div> */}
            <div className="contact-content">
              <ContactForm onClose={handleCloseContact} />
            </div>
          </div>
        </div>
      )}

      <QuirkyModal
        isOpen={modalState.isOpen}
        message={modalState.message}
        type={modalState.type}
        showRandomButton={modalState.showRandomButton}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        onRandomButtonClick={handleRandomButtonClick}
      />

      <RandomButton
        isVisible={modalState.showRandomButton && modalState.isOpen}
        onButtonClick={handleRandomButtonClick}
      />
    </div>
  );
};

export default MacintoshLanding;
