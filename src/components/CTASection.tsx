import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Ready to Transform Your Child's{" "}
            <span className="text-accent">Academic Journey?</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-body">
            Book a free diagnostic assessment today and discover how Aegitha's 
            personalized approach can help your child excel.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="font-medium">Free Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-medium">45-Min Session</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              variant="hero" 
              size="xl"
              className="text-lg"
            >
              Book Your Free Demo Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/60 font-body">
            No commitment required. See the difference in just one session.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
