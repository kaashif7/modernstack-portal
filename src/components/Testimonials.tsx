
import { Star } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  rating: number;
  delay?: number;
}

const Testimonial = ({ content, author, position, rating, delay = 0 }: TestimonialProps) => {
  return (
    <div 
      className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-md animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
          />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-xs text-muted-foreground">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialData = [
    {
      content: "An exceptional developer who delivered our healthcare management system with precision and efficiency. The attention to detail was remarkable.",
      author: "Sarah Johnson",
      position: "CTO, HealthTech Solutions",
      rating: 5
    },
    {
      content: "The street vendor platform developed by this team revolutionized how we connect with our customers. Highly recommended for mobile development.",
      author: "Michael Chen",
      position: "Founder, LocalEats",
      rating: 5
    },
    {
      content: "Outstanding work on our executive application management system. The interface is intuitive and the performance is excellent.",
      author: "David Wilson",
      position: "VP of Technology, Enterprise Inc",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary/30 dark:bg-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients who have experienced working with me on various projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <Testimonial
              key={testimonial.author}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              rating={testimonial.rating}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
