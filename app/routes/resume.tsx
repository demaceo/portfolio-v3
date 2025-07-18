import Layout from "../components/Layout";
import InteractiveResume from "../components/InteractiveResume";

export function meta() {
  return [
    { title: "Portfolio - Resume" },
    { name: "description", content: "My interactive resume" },
  ];
}

export default function Resume() {
  return (
    <Layout>
      <InteractiveResume />
    </Layout>
  );
}
