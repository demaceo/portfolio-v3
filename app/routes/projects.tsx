import Layout from "../components/Layout";
import Projectos from "../components/Projects";

export function meta() {
  return [
    { title: "Portfolio - Projects" },
    { name: "description", content: "My portfolio of projects" },
  ];
}

export default function Projects() {
  return (
    <Layout>
      <Projectos />
    </Layout>
  );
}
