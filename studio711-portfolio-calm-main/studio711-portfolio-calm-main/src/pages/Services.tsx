import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const services = [
  {
    id: 1,
    title: "Architectural Design",
    description:
      "Complete architectural services from initial concept through construction documentation. We design homes and small commercial buildings that respond to site, climate, and your specific requirements.",
    scope: [
      "Site analysis and feasibility",
      "Concept design and development",
      "Construction drawings",
      "Coordination with engineers and consultants",
    ],
  },
  {
    id: 2,
    title: "Interior Design",
    description:
      "Thoughtful interior design that considers how you live and work. We focus on spatial planning, material selection, and custom furniture design to create cohesive, functional interiors.",
    scope: [
      "Space planning and layout",
      "Material and finish selection",
      "Custom furniture design",
      "Lighting design",
    ],
  },
  {
    id: 3,
    title: "Turnkey Execution",
    description:
      "End-to-end project delivery from design through construction. We manage contractors, oversee quality, and handle all aspects of bringing your project to completion.",
    scope: [
      "Contractor selection and management",
      "Site supervision and quality control",
      "Budget and timeline management",
      "Final handover and documentation",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="section-spacing pb-12 md:pb-16">
        <div className="container-studio">
          <span className="text-sm text-muted-foreground tracking-wide uppercase">
            What We Do
          </span>
          <h1 className="mt-4 max-w-3xl">Services</h1>
          <p className="mt-6 text-muted-foreground max-w-xl">
            We offer a focused range of services for residential and small 
            commercial projects, from initial design through completed construction.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 md:pb-32">
        <div className="container-studio">
          <div className="space-y-0">
            {services.map((service, index) => (
              <article
                key={service.id}
                className={`py-12 md:py-16 ${
                  index !== services.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <div className="lg:col-span-4">
                    <span className="text-sm text-muted-foreground tracking-wide">
                      0{service.id}
                    </span>
                    <h2 className="text-2xl md:text-3xl mt-2">{service.title}</h2>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-muted-foreground leading-loose mb-8">
                      {service.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-medium mb-4 tracking-wide uppercase">
                        Scope includes
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                        {service.scope.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-foreground mt-1">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-spacing bg-secondary/50">
        <div className="container-studio">
          <div className="max-w-3xl">
            <span className="text-sm text-muted-foreground tracking-wide uppercase">
              How We Work
            </span>
            <h2 className="mt-4 mb-10">Our Process</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="font-serif text-3xl text-muted-foreground/50">01</span>
                <div>
                  <h3 className="text-xl mb-2">Consultation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We begin with a conversation to understand your needs, timeline, and budget. 
                    This initial meeting helps us determine if we're a good fit for your project.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-serif text-3xl text-muted-foreground/50">02</span>
                <div>
                  <h3 className="text-xl mb-2">Design Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We develop design concepts, refine them based on your feedback, and produce 
                    detailed documentation for construction.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-serif text-3xl text-muted-foreground/50">03</span>
                <div>
                  <h3 className="text-xl mb-2">Execution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We oversee construction to ensure quality and adherence to design intent, 
                    managing the process through to completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-studio text-center">
          <h2 className="mb-6">Ready to start your project?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            Get in touch to discuss your requirements and learn how we can help 
            bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-primary-foreground hover:bg-foreground/90 transition-colors text-sm tracking-wide"
          >
            Contact us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+918840230877" />
    </Layout>
  );
};

export default Services;
