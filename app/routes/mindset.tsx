import Layout from "../components/Layout";
import AboutMe from "../components/AboutMe";

export function meta() {
  return [
    { title: "Portfolio - Mindset" },
    { name: "description", content: "My mindset and philosophy" },
  ];
}

export default function Mindset() {
  return (
    <Layout>
      <AboutMe />
    </Layout>
  );
}
