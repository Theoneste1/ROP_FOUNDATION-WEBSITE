import { Globe, Medal, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Global() {
  const competitions = [
    { name: "International Olympiad in Informatics", abbr: "IOI", level: "International" },
    { name: "Pan-African Informatics Olympiad", abbr: "PAIO", level: "Continental" },
    { name: "International Olympiad in AI", abbr: "IOAI", level: "International" },
    { name: "Pan-African Olympiad in AI", abbr: "PAAIO", level: "Continental" },
    { name: "International Mathematical Olympiad", abbr: "IMO", level: "International" },
    { name: "Pan-African Mathematics Olympiad", abbr: "PAMO", level: "Continental" },
  ]

  return (
    <section id="global" className="py-24 bg-[#0C1E33] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#FBBF24]">Global Representation</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Team Rwanda on the World Stage</p>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-pretty">
            ROP officially coordinates Rwanda's participation in prestigious international and continental Olympiad
            competitions, showcasing our nation's talent globally.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-12">
          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <Globe className="h-10 w-10 text-[#0891B2] mb-4" />
              <CardTitle className="text-white">Selection Process</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Rigorous national competitions and training camps identify the best students to represent Rwanda
              internationally.
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <Medal className="h-10 w-10 text-[#FBBF24] mb-4" />
              <CardTitle className="text-white">Achievements</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Our students have earned medals and honorable mentions at international competitions, putting Rwanda on
              the map.
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-[#0891B2] mb-4" />
              <CardTitle className="text-white">Growing Impact</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Year over year, we're expanding participation and improving performance across all Olympiad disciplines.
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#FBBF24]">International Competitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {competitions.map((comp) => (
              <div
                key={comp.abbr}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div>
                  <div className="font-semibold text-white">{comp.abbr}</div>
                  <div className="text-sm text-gray-400">{comp.name}</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-[#0891B2]/20 text-[#0891B2] border border-[#0891B2]/30">
                  {comp.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
