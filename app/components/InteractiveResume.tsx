import React, { useRef } from "react";
import DemaceoResume from "../utilities/DemaceoResume";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/InteractiveResume.css";

function ExperienceCard({
  exp,
}: {
  readonly exp: (typeof DemaceoResume.experiences)[0];
}) {
  return (
    <div className="experience-card">
      <h3>
        {exp.role} @ {exp.organization}
      </h3>
      <p>
        {exp.startDate} {exp.endDate ? `— ${exp.endDate}` : ""}
      </p>
      <p>{exp.summary}</p>
    </div>
  );
}

export default function InteractiveResume() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const {
    name,
    title,
    location,
    // email,
    website,
    linkedin,
    skills,
    interests,
    experiences,
    education,
  } = DemaceoResume;

  const handleDownloadPdf = async () => {
    if (!resumeRef.current) return;
    const element = resumeRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imageData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(imageData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("DemaceoResume.pdf");
  };

  return (
    <div className="workxp-container" ref={resumeRef}>
      <header className="workxp-header">
        <h1>{name}</h1>
        <p>
          {title} | {location}
        </p>
        <div>
          {/* <a href={`mailto:${email}`} className="underline">
            {email}
          </a>{" "}
          •{" "} */}
          <a href={website} className="underline">
            Portfolio
          </a>{" "}
          |{" "}
          <a href={linkedin} className="underline">
            LinkedIn
          </a>
        </div>
        <div className="workxp-buttons">
          <button onClick={handleDownloadPdf} className="download-button">
            Download PDF
          </button>
        </div>
      </header>

      <main>
        <section>
          <h2>Experience</h2>
          {experiences.map((exp) => (
            <ExperienceCard key={`${exp.role}-${exp.organization}-${exp.startDate}`} exp={exp} />
          ))}
        </section>

        <section>
          <h2>Education</h2>
          {education.map((edu) => (
            <div
              key={`${edu.institution}-${edu.program}`}
              className="education-item"
            >
              <p className="institution">{edu.institution}</p>
              <p className="program">
                {edu.program} | {edu.years}
              </p>
            </div>
          ))}
        </section>

        <section>
          <h2>Skills & Interests</h2>
          <div className="skills-container">
            {skills.map((skill, idx) => (
              <span key={idx} className="skill-item">
                {skill}
              </span>
            ))}
          </div>
          <div className="interests-container">
            {interests.map((i, idx) => (
              <span key={idx} className="interest-item">
                {i}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
