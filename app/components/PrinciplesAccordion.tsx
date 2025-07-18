import { useState } from "react";
import principlesData from "../utilities/principlesData";
import "../styles/PrinciplesAccordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faWebflow,
  faGit,
  faReact,
  faJs,
  faCss3,
  faHtml5,
  faGithub,
  faNode,
  faNpm,
  faPython,
  faAws,
  faDocker,
  faLinux,
  faSlack,
  faJira,
  faMarkdown,
  // faTerminal,
  // faDatabase,
  // faCode,
  // faRocket,
  // faLeaf,
} from "@fortawesome/free-brands-svg-icons";

export default function AccordionPrinciples() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

interface PrincipleItem {
    id: string | number;
    title: string;
    description: string;
}

const toggleItem = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
};

const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, index: number): void => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleItem(index);
    }
};


  return (
    <section className="principles-page">
      <div className="principle-main-title-container">
        <h2 className="principle-main-title shadowed-text">Principles & Strategies</h2>
      </div>

      <div className="accordion-container" role="presentation">
        {principlesData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.id}>
              <div
                className="accordion-title"
                id={`accordion-header-${index}`}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${index}`}
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                <span className="accordion-title-text">{item.title}</span>
                <span className="accordion-arrow">
                  <i
                    className={`fa fa-angle-down ${
                      isOpen ? "fa-rotate-180" : ""
                    }`}
                  ></i>
                </span>
              </div>
              <div
                id={`accordion-content-${index}`}
                className={`accordion-content ${
                  isOpen ? "accordion-content-open" : ""
                }`}
                role="region"
                aria-labelledby={`accordion-header-${index}`}
              >
                <p
                  className={`accordion-text ${
                    isOpen ? "accordion-text-open" : ""
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="tools-icons-container">
        <div className="icon-wrapper" data-tooltip="Figma">
          <FontAwesomeIcon icon={faFigma} />
        </div>
        <div className="icon-wrapper" data-tooltip="Webflow">
          <FontAwesomeIcon icon={faWebflow} />
        </div>
        <div className="icon-wrapper" data-tooltip="Git">
          <FontAwesomeIcon icon={faGit} />
        </div>
        <div className="icon-wrapper" data-tooltip="Node.js">
          <FontAwesomeIcon icon={faNode} />
        </div>
        <div className="icon-wrapper" data-tooltip="React">
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div className="icon-wrapper" data-tooltip="JavaScript">
          <FontAwesomeIcon icon={faJs} />
        </div>
        <div className="icon-wrapper" data-tooltip="CSS">
          <FontAwesomeIcon icon={faCss3} />
        </div>
        <div className="icon-wrapper" data-tooltip="HTML5">
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className="icon-wrapper" data-tooltip="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="icon-wrapper" data-tooltip="NPM">
          <FontAwesomeIcon icon={faNpm} />
        </div>
        <div className="icon-wrapper" data-tooltip="Python">
          <FontAwesomeIcon icon={faPython} />
        </div>
        <div className="icon-wrapper" data-tooltip="AWS">
          <FontAwesomeIcon icon={faAws} />
        </div>
        <div className="icon-wrapper" data-tooltip="Docker">
          <FontAwesomeIcon icon={faDocker} />
        </div>
        <div className="icon-wrapper" data-tooltip="Linux">
          <FontAwesomeIcon icon={faLinux} />
        </div>
        <div className="icon-wrapper" data-tooltip="Slack">
          <FontAwesomeIcon icon={faSlack} />
        </div>
        <div className="icon-wrapper" data-tooltip="Jira">
          <FontAwesomeIcon icon={faJira} />
        </div>
        <div className="icon-wrapper" data-tooltip="Markdown">
          <FontAwesomeIcon icon={faMarkdown} />
        </div>
      </div>
    </section>
  );
}
