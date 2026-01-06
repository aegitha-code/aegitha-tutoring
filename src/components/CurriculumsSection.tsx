import { CheckCircle } from "lucide-react";

const curriculums = [
  {
    name: "CBSE",
    fullName: "Central Board of Secondary Education",
    grades: "Classes 1-12",
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
  },
  {
    name: "IB",
    fullName: "International Baccalaureate",
    grades: "PYP, MYP, DP",
    subjects: ["Mathematics", "Sciences", "Languages", "Humanities"],
  },
  {
    name: "IGCSE",
    fullName: "Cambridge IGCSE",
    grades: "Years 7-11",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
  },
  {
    name: "NEET",
    fullName: "Foundation & Test Prep",
    grades: "Classes 9-12",
    subjects: ["Physics", "Chemistry", "Biology", "Problem Solving"],
  },
];

const CurriculumsSection = () => {
  return (
    <section id="curriculums" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Curriculums We Cover
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Coverage
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Expert tutoring across all major educational boards and competitive exam preparations.
          </p>
        </div>

        {/* Curriculum cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculums.map((curriculum, index) => (
            <div
              key={curriculum.name}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-accent hover:shadow-medium transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-lg bg-primary text-primary-foreground text-lg font-bold">
                  {curriculum.name}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">
                {curriculum.fullName}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{curriculum.grades}</p>
              <ul className="space-y-2">
                {curriculum.subjects.map((subject) => (
                  <li key={subject} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{subject}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumsSection;
