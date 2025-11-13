import ClientLogos from '../ClientLogos';

export default function ClientLogosExample() {
  const logos = [
    { name: "Tech Corp", logo: "🚀" },
    { name: "Innovate Inc", logo: "💡" },
    { name: "Digital Solutions", logo: "💻" },
    { name: "Growth Partners", logo: "📈" },
    { name: "Cloud Systems", logo: "☁️" },
    { name: "Data Analytics", logo: "📊" }
  ];

  return (
    <div className="p-8">
      <ClientLogos logos={logos} />
    </div>
  );
}
