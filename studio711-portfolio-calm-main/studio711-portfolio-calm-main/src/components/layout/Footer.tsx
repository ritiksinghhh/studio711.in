import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-studio py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-tight">
            Studio 711
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Architecture and interior design studio based in Lucknow, India. Established 2025.
          </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Navigation</h4>
            <ul className="space-y-3">
              {["Projects", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@studio711.in" className="hover:text-foreground transition-colors">
                  hello@studio711.in
                </a>
              </li>
              <li>
                <a href="tel:+918840230877" className="hover:text-foreground transition-colors">
                  +91 8840230877
                </a>
              </li>
              <li className="leading-relaxed">
                1st Floor, A/24 Raghunandan Ashiyana,<br />
                BBDU, Lucknow
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps?q=26.894722,81.055833" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  View on Map →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Studio 711. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Architecture · Interior Design · Execution
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
