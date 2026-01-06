import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import heroStudent from "@/assets/hero-student.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                <Star className="w-4 h-4 text-accent fill-accent" />
                Rated 4.9/5 by Parents
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                <Users className="w-4 h-4 text-primary" />
                5000+ Students
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Unlock Your Child's{" "}
                <span className="text-gradient">True Potential</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-body leading-relaxed">
                Aegitha is revolutionizing online education with a personalized, 
                assessment-focused approach that identifies and addresses the root 
                of learning challenges.
              </p>
            </div>

            {/* Curriculum badges */}
            <div className="flex flex-wrap gap-2">
              {["CBSE", "IB", "IGCSE", "NEET"].map((curriculum) => (
                <span
                  key={curriculum}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
                >
                  {curriculum}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Book Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Learn More
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-secondary-foreground">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Join 500+ families</p>
                <p className="text-xs text-muted-foreground">who enrolled this month</p>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={heroStudent}
                alt="Happy student learning online with Aegitha"
                className="w-full h-auto object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-xs bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">97% Score Improvement</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Students see results within 3 months</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-2xl rotate-12 animate-float" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-xl -rotate-12 animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
