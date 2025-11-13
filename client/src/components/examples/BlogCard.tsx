import BlogCard from '../BlogCard';
import projectImage from '@assets/generated_images/Portfolio_project_1_758c837e.png';

export default function BlogCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <BlogCard
        title="Building Scalable Product Teams: Lessons from the Trenches"
        excerpt="After leading multiple product teams through hyper-growth, I've learned that success isn't just about hiring the right people—it's about creating systems that scale."
        date="November 10, 2025"
        tags={["Product Management", "Leadership", "Team Building"]}
        image={projectImage}
        slug="building-scalable-product-teams"
      />
    </div>
  );
}
