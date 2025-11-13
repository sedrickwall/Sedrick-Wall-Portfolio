import Testimonial from '../Testimonial';
import headshot from '@assets/generated_images/Sedrick_Wall_professional_headshot_e98c5cc3.png';

export default function TestimonialExample() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "Tech Innovators",
      content: "Sedrick's leadership and vision were instrumental in transforming our product strategy. His ability to balance user needs with business goals is exceptional.",
      avatar: headshot
    },
    {
      name: "Michael Chen",
      role: "VP Engineering",
      company: "Digital Solutions",
      content: "Working with Sedrick has been a game-changer. His strategic thinking and collaborative approach made our product launches incredibly successful.",
      avatar: headshot
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Operations",
      company: "Growth Partners",
      content: "Sedrick brings a unique combination of technical expertise and business acumen. His contributions have directly impacted our bottom line.",
      avatar: headshot
    }
  ];

  return (
    <div className="p-8">
      <Testimonial testimonials={testimonials} />
    </div>
  );
}
