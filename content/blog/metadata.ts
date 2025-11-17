import project1 from "@assets/generated_images/Portfolio_project_1_758c837e.png";
import project2 from "@assets/generated_images/Portfolio_project_2_d92035d8.png";
import project3 from "@assets/generated_images/Portfolio_project_3_571f0d16.png";
import project4 from "@assets/generated_images/Portfolio_project_4_c5a75a13.png";

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
  author: string;
}

export const blogPosts: BlogPostMetadata[] = [
  {
    slug: "building-scalable-product-teams",
    title: "Building Scalable Product Teams",
    excerpt: "After leading multiple product teams through hyper-growth, I've learned that success isn't just about hiring the right people—it's about creating systems that scale. Here's what I've learned.",
    date: "November 10, 2025",
    tags: ["Product Management", "Leadership", "Team Building"],
    image: project1,
    author: "Sedrick Wall",
  },
  {
    slug: "real-estate-strategies-2025",
    title: "Real Estate Investment Strategies for 2025",
    excerpt: "The real estate market is evolving. Here are the top strategies I'm using to maximize returns in today's market, from mid-term rentals to long-term holds.",
    date: "November 5, 2025",
    tags: ["Real Estate", "Investing", "Strategy"],
    image: project2,
    author: "Sedrick Wall",
  },
  {
    slug: "power-of-community",
    title: "The Power of Community: TheMenOnMission.org Journey",
    excerpt: "What started as a small group of men committed to personal growth has become a movement transforming lives. Here's the story of TheMenOnMission.org.",
    date: "October 28, 2025",
    tags: ["Community", "Faith", "Leadership"],
    image: project3,
    author: "Sedrick Wall",
  },
  {
    slug: "product-led-growth-framework",
    title: "Product-Led Growth: A Framework",
    excerpt: "Product-led growth isn't just a buzzword—it's a fundamental shift in how we think about acquisition, activation, and retention. Here's my framework.",
    date: "October 20, 2025",
    tags: ["Product Management", "Growth", "Strategy"],
    image: project4,
    author: "Sedrick Wall",
  },
  {
    slug: "balancing-multiple-ventures",
    title: "Balancing Multiple Ventures",
    excerpt: "How do you manage a product career, real estate investments, and community leadership simultaneously? Here are my strategies for balance.",
    date: "October 15, 2025",
    tags: ["Productivity", "Leadership", "Life Balance"],
    image: project1,
    author: "Sedrick Wall",
  },
  {
    slug: "faith-in-business",
    title: "Faith in Business: Lessons Learned",
    excerpt: "Integrating faith into business decisions has been transformative. Here are the principles that guide my approach to leadership and entrepreneurship.",
    date: "October 8, 2025",
    tags: ["Faith", "Business", "Leadership"],
    image: project2,
    author: "Sedrick Wall",
  },
];

export const categories = [
  "All",
  "Product Management",
  "Real Estate",
  "Faith",
  "Community",
  "Leadership",
  "Growth",
  "Investing",
  "Strategy",
  "Team Building",
  "Productivity",
  "Life Balance",
  "Business",
];
