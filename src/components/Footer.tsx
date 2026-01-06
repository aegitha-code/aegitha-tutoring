import { Phone, Mail, MapPin, BookOpen, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-foreground" />
              </div>
              <span className="font-display text-2xl font-bold">Aegitha</span>
            </a>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Revolutionizing online education with personalized, assessment-focused 
              learning that unlocks every child's true potential.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-foreground flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Why Aegitha", "Curriculums", "Pricing", "FAQ"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-body text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculums */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Curriculums</h4>
            <ul className="space-y-3">
              {["CBSE Tuitions", "IB Programme", "IGCSE Classes", "NEET Foundation", "JEE Preparation"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-body text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919999999999" className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm">+91 99999 99999</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@aegitha.com" className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm">hello@aegitha.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm">
                    Bangalore, India<br />
                    (Online Classes Worldwide)
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm font-body">
            © {currentYear} Aegitha Online Tuitions. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-primary-foreground/50 hover:text-accent text-sm font-body transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
