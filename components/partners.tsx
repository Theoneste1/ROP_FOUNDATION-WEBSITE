import { sponsors } from "@/lib/sponsors";
import { Building2, School, Globe, Heart } from "lucide-react";

export function Partners() {
  const partnerTypes = [
    {
      icon: Building2,
      title: "Government Ministries",
      description:
        "Collaborating with MINEDUC and other government bodies to advance STEM education nationwide.",
    },
    {
      icon: School,
      title: "Educational Institutions",
      description:
        "Partnering with universities and schools to identify talent and provide training resources.",
    },
    {
      icon: Globe,
      title: "International Organizations",
      description:
        "Working with global Olympiad committees and educational foundations for knowledge exchange.",
    },
    {
      icon: Heart,
      title: "Private Sector & NGOs",
      description:
        "Engaging sponsors and non-profits to support student development and competition participation.",
    },
  ];

  return (
    <section id="partners" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#0891B2]">
            Partnerships
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-[#0C1E33] sm:text-5xl">
            Building a Network of Excellence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
            Our success depends on strong partnerships across government,
            education, and the private sector. Together, we're creating
            opportunities for Rwanda's brightest minds.
          </p>
        </div>

        <h3 className="text-2xl text-center font-bold text-[#0C1E33] mb-10">
          Who We Partner With
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {partnerTypes.map((partner) => (
            <div key={partner.title} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0891B2]">
                  <partner.icon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#0C1E33] mb-2">
                {partner.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl text-center font-bold text-[#0C1E33] mb-10">
            Our Sponsors
          </h3>
          <div className="flex flex-wrap gap-8 items-center justify-center p-6">
            {sponsors?.length > 0 ? (
              sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex flex-col items-center justify-center gap-3"
                >
                  <div className="flex items-center justify-center w-[180px] h-[100px] p-4 bg-white rounded-lg border border-gray-200 hover:border-[#0891B2] hover:shadow-md transition-all duration-300">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-center text-sm font-medium text-gray-700">
                    {sponsor.name}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Become a sponsor.</p>
            )}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#0891B2] to-[#065F46] rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-100">
            Join us in nurturing Rwanda's future innovators. Whether through
            sponsorship, mentorship, or resource sharing, your support makes a
            lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#0891B2] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Partner With Us
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Sponsor a Student
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
