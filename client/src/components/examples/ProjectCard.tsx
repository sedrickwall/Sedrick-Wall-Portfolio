import ProjectCard from '../ProjectCard';
import projectImage from '@assets/generated_images/Portfolio_project_1_758c837e.png';

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProjectCard
        title="Enterprise Dashboard"
        description="A comprehensive analytics platform for tracking business metrics and KPIs with real-time data visualization."
        image={projectImage}
        tags={["React", "TypeScript", "Node.js", "PostgreSQL"]}
        liveUrl="https://example.com"
        githubUrl="https://github.com/example"
      />
    </div>
  );
}
