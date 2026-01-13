import Layout from "@/components/layout/Layout";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import heroImage from "@/assets/hero-interior.jpg";

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="section-spacing pb-12 md:pb-16">
        <div className="container-studio">
          <span className="text-sm text-muted-foreground tracking-wide uppercase">
            About Us
          </span>
          <h1 className="mt-4 max-w-3xl">Studio 711</h1>
        </div>
      </section>

      {/* Main Image */}
      <section className="pb-16 md:pb-24">
        <div className="container-studio">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-muted">
            <img
              src={heroImage}
              alt="Studio 711 interior design work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="pb-20 md:pb-32">
        <div className="container-studio">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Text */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl mb-8">
                We design spaces that work for the people who use them.
              </h2>
              <div className="space-y-6 text-muted-foreground leading-loose">
                <p>
                  Studio 711 is an architecture and interior design practice established 
                  in 2025, based in Lucknow, India. We work with residential and small 
                  commercial clients who value thoughtful design and careful attention 
                  to detail.
                </p>
                <p>
                  Our approach is grounded in practicality. We believe that good design 
                  emerges from understanding how people actually live — their routines, 
                  their needs, and their relationship with space. We don't chase trends 
                  or make grand gestures. Instead, we focus on creating environments 
                  that are calm, functional, and built to last.
                </p>
                <p>
                  Every project begins with listening. We take time to understand your 
                  requirements, your constraints, and your aspirations. From there, we 
                  develop designs that respond directly to your brief — nothing more, 
                  nothing less.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">
                    Established
                  </h3>
                  <p className="font-serif text-2xl">2025</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">
                    Location
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lucknow, Uttar Pradesh<br />
                    India
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">
                    Focus Areas
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>Residential Architecture</li>
                    <li>Interior Design</li>
                    <li>Small Commercial Spaces</li>
                    <li>Renovation & Restoration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-spacing bg-secondary/50">
        <div className="container-studio">
          <div className="max-w-3xl">
            <span className="text-sm text-muted-foreground tracking-wide uppercase">
              Our Approach
            </span>
            <h2 className="mt-4 mb-10">Design Philosophy</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-3">Clarity over complexity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We favor simple, well-considered solutions over complicated designs. 
                  Every element should have a purpose and contribute to the whole.
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-3">Context matters</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We design for the specific site, climate, and culture of each project. 
                  Good architecture responds to its surroundings.
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-3">Built to endure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We select materials and details that age gracefully. Our goal is to 
                  create spaces that remain relevant and beautiful for decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+918840230877" />
    </Layout>
  );
};

export default About;
