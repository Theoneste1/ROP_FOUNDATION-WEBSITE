import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Atom, Code, Brain, ArrowRight } from "lucide-react";
import { programsLink } from "@/lib/programsLink";

export function Programs() {
  const programs = [
    {
      icon: Calculator,
      title: "Rwanda Mathematics Olympiad",
      description:
        "Developing problem-solving skills and mathematical reasoning through IMO and PAMO preparation.",
      color: "bg-[#0891B2]",
      competitions: ["IMO", "PAMO"],
      link: programsLink.math,
    },
    {
      icon: Atom,
      title: "Rwanda Physics Olympiad",
      description:
        "Exploring the fundamental laws of nature through theoretical and experimental challenges.",
      color: "bg-[#FBBF24]",
      competitions: ["IPhO", "PAPhO"],
      link: programsLink.physics,
    },
    {
      icon: Code,
      title: "Rwanda Computing Olympiad",
      description:
        "Building computational thinking, data structure & algorithmic problem-solving, and AI engineering skills for IOI, IOAI, PAAIO, and PAIO.",
      color: "bg-[#065F46]",
      competitions: ["IOI", "PAIO", "IOAI", "PAAIO"],
      link: programsLink.computing,
    },
  ];

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#0891B2]">
            Our Programs
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-[#0C1E33] sm:text-5xl">
            Olympiad Disciplines
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
            Explore our comprehensive Olympiad programs designed to challenge
            and inspire Rwanda's brightest minds across multiple STEM
            disciplines.
          </p>
        </div>

        <div className="flex flex-col w-full md:flex-row gap-8 md:gap-6 lg:gap-8 justify-center items-stretch">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="border-none w-full  shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${program.color} mb-4`}
                >
                  <program.icon
                    className="h-7 w-7 text-white"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-xl text-[#0C1E33]">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.competitions.map((comp) => (
                    <span
                      key={comp}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full text-[#0891B2] hover:text-[#0891B2]/80 hover:bg-[#0891B2]/10"
                  asChild
                >
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
