import TechStack from '../TechStack';

export default function TechStackExample() {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "AWS", icon: "☁️" }
  ];

  return (
    <div className="p-8 max-w-4xl">
      <TechStack title="Frontend Development" technologies={technologies} />
    </div>
  );
}
