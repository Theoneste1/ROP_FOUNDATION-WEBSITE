import { GraduationCap, Users, Trophy, Calendar } from "lucide-react"

export function Activities() {
  const activities = [
    {
      icon: GraduationCap,
      title: "Training Camps",
      description: "Intensive preparation programs led by expert mentors and former Olympiad participants.",
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "One-on-one guidance from experienced coaches and international medalists.",
    },
    {
      icon: Trophy,
      title: "National Competitions",
      description: "Annual selection contests to identify and prepare Team Rwanda for international events.",
    },
    {
      icon: Calendar,
      title: "Rwanda Olympiad Week",
      description: "A week-long celebration of STEM excellence featuring workshops, competitions, and exhibitions.",
    },
  ]

  return (
    <section id="activities" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#0891B2]">National Activities</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-[#0C1E33] sm:text-5xl">
            Building Excellence Together
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
            Through comprehensive training, mentorship, and competitive opportunities, we prepare Rwanda's students for
            success on the international stage.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="relative flex gap-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FBBF24]">
                <activity.icon className="h-6 w-6 text-[#0C1E33]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0C1E33] mb-2">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
