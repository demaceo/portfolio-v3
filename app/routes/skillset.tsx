import Layout from "../components/Layout";
// import Hero from "../components/Hero";
import ServiceSpectrum from "../components/ServiceSpectrum";
import PrinciplesAccordion from "../components/PrinciplesAccordion";
export function meta() {
  return [
    { title: "Portfolio - Skillset" },
    { name: "description", content: "My skills and expertise" },
  ];
}

export default function Skillset() {
  return (
    <Layout>
      {/* <Hero /> */}
      <ServiceSpectrum />
      <PrinciplesAccordion />
    </Layout>
  );
}
