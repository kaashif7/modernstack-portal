
import { useState } from "react";
import { Github, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
      
      // Reset success message after a while
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "contact@example.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (123) 456-7890",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "New York, NY",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "Github",
      value: "github.com/username",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Fill out the form below or reach out through one of my contact channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            {submitSuccess ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
                Thank you! Your message has been sent successfully.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/50 dark:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/50 dark:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/50 dark:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  isSubmitting
                    ? "bg-primary/70 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/90"
                } text-primary-foreground`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl p-6 transition-all hover:shadow-md"
                >
                  <div className="p-3 w-fit rounded-full bg-primary/10 text-primary mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-medium mb-1">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 glass-card rounded-xl p-6">
              <h4 className="font-medium mb-4">Working Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
