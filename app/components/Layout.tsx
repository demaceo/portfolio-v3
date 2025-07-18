import React from "react";
import NavBar from "./NavBar";
import Contact from "./Contact";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="portfolio-container">
      <NavBar />
      {children}
      <Contact />
    </section>
  );
}
