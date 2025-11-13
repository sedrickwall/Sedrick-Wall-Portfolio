import Timeline from '../Timeline';

export default function TimelineExample() {
  const items = [
    {
      year: "2020 - Present",
      title: "Senior Product Manager",
      company: "Tech Innovations Inc.",
      description: "Leading product strategy and development for enterprise SaaS platform serving 10,000+ users."
    },
    {
      year: "2018 - 2020",
      title: "Product Manager",
      company: "Digital Solutions Co.",
      description: "Managed product roadmap and launched 3 major features that increased user engagement by 45%."
    },
    {
      year: "2015 - 2018",
      title: "Associate Product Manager",
      company: "StartUp Ventures",
      description: "Collaborated with engineering and design teams to deliver MVP and achieve product-market fit."
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Timeline items={items} />
    </div>
  );
}
