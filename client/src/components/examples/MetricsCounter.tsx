import MetricsCounter from '../MetricsCounter';

export default function MetricsCounterExample() {
  const metrics = [
    { end: 50, suffix: "+", label: "Projects Delivered" },
    { end: 15, suffix: "+", label: "Years Experience" },
    { end: 100, suffix: "+", label: "Happy Clients" },
    { end: 25, suffix: "M", prefix: "$", label: "Revenue Generated" }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <MetricsCounter metrics={metrics} />
    </div>
  );
}
