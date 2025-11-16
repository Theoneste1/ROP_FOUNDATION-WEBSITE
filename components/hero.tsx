import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Rwanda Olympiad Program Hero Section"
      className="mt-4 relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center blur-none transform-gpu scale-105"
          style={{ backgroundImage: "url('/images/image1-C2vFTdwn.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1E33]/100 via-[#0C1E33]/30 to-[#065F46]/80" />
      </div>

      <div className="relative z-10 bg-gradient-to-br from-[#0C1E33] via-[#0C1E33] to-[#065F46]"></div>
      <div className="relative z-10 mx-auto md:max-w-7xl px-4 sm:px-6 py-16 sm:py-24 md:py-32 lg:py-40 lg:px-8 text-center">
        {/* <div className="mb-6 sm:mb-8 flex justify-center">
          <Image
            src="/images/rop-logo-full.png"
            alt="Rwanda Olympiad Program"
            width={300}
            height={300}
            className="h-32 sm:h-40 md:h-48 w-auto rounded"
            priority
          />
        </div> */}

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-balance px-2">
          Nurturing Rwanda's <br />
          <span className="text-[#FBBF24]">Future Innovators</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-gray-300 max-w-2xl mx-auto text-pretty px-2">
          The national umbrella organization coordinating Mathematics, Physics,
          Informatics, and Artificial Intelligence Olympiads in Rwanda.
          Empowering students to compete and excel on the global stage.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#0891B2] hover:bg-[#0891B2]/90 text-white text-base sm:text-lg px-6 sm:px-8 py-3"
            asChild
          >
            <a href="#programs">
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 bg-transparent"
            asChild
          >
            <a href="#about">Learn More</a>
          </Button>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-4 max-w-3xl mx-auto px-2">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0891B2]">
              4+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">
              Olympiad Disciplines
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FBBF24]">
              500+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">
              Students Trained
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0891B2]">
              6+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">
              International Competitions
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FBBF24]">
              10+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">
              Partner Organizations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
