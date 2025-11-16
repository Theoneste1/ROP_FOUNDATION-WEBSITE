import { Target, Users, Globe, Award } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To identify, nurture, and develop exceptional talent in STEM disciplines across Rwanda, preparing students for international excellence.",
    },
    {
      icon: Users,
      title: "National Coordination",
      description:
        "We serve as the central hub connecting students, educators, mentors, and institutions to advance Olympiad programs nationwide.",
    },
    {
      icon: Globe,
      title: "Global Representation",
      description:
        "Officially coordinating Team Rwanda's participation in prestigious international Olympiad competitions worldwide.",
    },
    {
      icon: Award,
      title: "Excellence & Innovation",
      description:
        "Fostering a culture of academic excellence, critical thinking, and innovation in Mathematics, Physics, Informatics, and AI.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#0891B2]">About ROP</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-[#0C1E33] sm:text-5xl">
            The National Home of Olympiad Programs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
            The Rwanda Olympiad Program (ROP) is the national umbrella organization that coordinates, develops, and
            promotes all Olympiad disciplines in Rwanda. We unite students, educators, and mentors while representing
            Rwanda in global Olympiad communities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="relative p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0891B2] mb-4">
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-[#0C1E33] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
