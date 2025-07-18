import MacintoshLanding from "../components/MacintoshLanding";

export function meta() {
  return [
    { title: "Portfolio - Welcome" },
    { name: "description", content: "Welcome to my digital portfolio!" },
  ];
}

export default function Home() {
  return <MacintoshLanding />;
}
