import Layout from "@/components/layout/Layout";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Riverside Residence",
    location: "Ayodhya",
    description: "A contemporary family home designed around natural light and open living spaces.",
    year: "2025",
    type: "Residential",
  },
  {
    id: 2,
    image: project2,
    title: "Minimal Retreat",
    location: "Lucknow",
    description: "Interior design for a serene bedroom retreat focusing on natural materials and calm tones.",
    year: "2025",
    type: "Interior",
  },
  {
    id: 3,
    image: project3,
    title: "Urban Kitchen",
    location: "Varanasi",
    description: "A functional kitchen design balancing storage needs with clean, modern aesthetics.",
    year: "2025",
    type: "Interior",
  },
  {
    id: 4,
    image: project4,
    title: "Courtyard House",
    location: "Ayodhya",
    description: "An architecture project centered around an internal courtyard, bringing nature into daily living.",
    year: "2025",
    type: "Residential",
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="section-spacing pb-12 md:pb-16">
        <div className="container-studio">
          <span className="text-sm text-muted-foreground tracking-wide uppercase">
            Our Work
          </span>
          <h1 className="mt-4 max-w-3xl">Projects</h1>
          <p className="mt-6 text-muted-foreground max-w-xl">
            A selection of residential and commercial projects showcasing our 
            approach to thoughtful, functional design.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container-studio">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
            {projects.map((project, index) => (
              <article 
                key={project.id} 
                className={`group ${index % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground tracking-wide uppercase mb-3">
                    <span>{project.type}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl">{project.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+918840230877" />
    </Layout>
  );
};

export default Projects;
