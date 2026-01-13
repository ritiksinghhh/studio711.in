import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import heroImage from "@/assets/hero-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const featuredProjects = [
  { id: 1, image: project1, title: "Riverside Residence", location: "Ayodhya" },
  { id: 2, image: project2, title: "Minimal Retreat", location: "Lucknow" },
  { id: 3, image: project3, title: "Urban Kitchen", location: "Varanasi" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[90vh]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern minimal interior with natural light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </div>
        
        <div className="relative h-full container-studio flex flex-col justify-end pb-16 md:pb-24">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-primary-foreground mb-4">
              Architecture & Interior Design
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl font-light max-w-lg">
              Creating calm, functional, and thoughtfully detailed spaces since 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-spacing">
        <div className="container-studio">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <span className="text-sm text-muted-foreground tracking-wide uppercase">
                About Studio 711
              </span>
              <h2 className="mt-4 text-balance">
                Design that serves life
              </h2>
            </div>
            <div className="lg:pt-12">
              <p className="text-muted-foreground leading-loose">
                We approach every project with the belief that architecture should be practical, 
                calm, and enduring. Our work focuses on creating spaces that respond to how people 
                actually live — not trends or fleeting styles. Based in Ayodhya, we work with 
                residential and small commercial clients who value thoughtful, well-detailed design.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium group"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-spacing bg-secondary/50">
        <div className="container-studio">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="text-sm text-muted-foreground tracking-wide uppercase">
                Selected Work
              </span>
              <h2 className="mt-4">Projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium group"
            >
              View all projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to="/projects"
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/projects"
            className="md:hidden inline-flex items-center gap-2 mt-10 text-sm font-medium group"
          >
            View all projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-spacing">
        <div className="container-studio">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm text-muted-foreground tracking-wide uppercase">
              What We Do
            </span>
            <h2 className="mt-4 mb-8">Our Services</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg md:text-xl text-muted-foreground font-serif">
              <span>Architectural Design</span>
              <span className="hidden md:inline">·</span>
              <span>Interior Design</span>
              <span className="hidden md:inline">·</span>
              <span>Turnkey Execution</span>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 mt-10 text-sm font-medium group"
            >
              Explore our services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-foreground text-primary-foreground">
        <div className="container-studio text-center">
          <h2 className="text-primary-foreground mb-6">Start a conversation</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-10">
            Whether you're planning a new home, renovating an existing space, or need 
            design consultation, we'd be happy to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-colors text-sm tracking-wide"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+918840230877" />
    </Layout>
  );
};

export default Index;
