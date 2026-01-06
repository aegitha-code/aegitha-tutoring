import { ClipboardCheck, Route, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Assessment-Focused Learning",
    description:
      "We begin with a comprehensive diagnostic assessment to pinpoint your child's exact learning needs and knowledge gaps.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Route,
    title: "Personalized Learning Paths",
    description:
      "Based on the initial assessment, we create a customized learning plan that targets specific areas for improvement.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Expert 1-on-1 Tutoring",
    description:
      "Your child receives dedicated attention from expert tutors in a live, interactive online environment.",
    color: "bg-gold-light/20 text-gold-dark",
  },
  {
    icon: TrendingUp,
    title: "Continuous Progress Tracking",
    description:
      "Regular assessments monitor progress, provide detailed feedback, and adapt the learning plan as concepts are mastered.",
    color: "bg-green-100 text-green-700",
  },
];

const FeaturesSection = () => {
  return (
    <section id="why-aegitha" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Our Methodology
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Aegitha?
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Our data-driven methodology sets us apart, making learning more 
            effective and engaging for every student.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-medium transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-5">
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
