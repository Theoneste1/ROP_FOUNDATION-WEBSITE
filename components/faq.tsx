import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is the Rwanda Olympiad Program (ROP)?",
      answer:
        "The Rwanda Olympiad Program is the national umbrella organization that coordinates and organizes Mathematics, Physics, Informatics, and Artificial Intelligence Olympiads in Rwanda. We identify, train, and support talented students to compete at national and international competitions.",
    },
    {
      question: "Who can participate in ROP programs?",
      answer:
        "ROP programs are open to all Rwandan students from secondary schools across the country. Students are selected through a series of competitive examinations and assessments in their respective disciplines. We welcome passionate learners who demonstrate strong aptitude in Mathematics, Physics, Computing, or AI.",
    },
    {
      question: "How do I register for an Olympiad competition?",
      answer:
        "Registration processes vary by discipline. Visit the respective program websites (Mathematics, Physics, or Computing) for specific registration details and deadlines. Typically, registrations open several months before competitions through your school or directly on our program websites.",
    },
    {
      question: "What kind of training does ROP provide?",
      answer:
        "ROP provides comprehensive training programs including intensive workshops, problem-solving sessions, online resources, and mentorship from experienced coaches and past Olympiad participants. Training covers advanced concepts, competition strategies, and practical problem-solving techniques.",
    },
    {
      question: "Are there any fees to participate?",
      answer:
        "ROP programs are free, thanks to our generous sponsors and partners. We believe in providing equal opportunities to all talented students regardless of their financial background or any other circumstances.",
    },
    {
      question: "What are the benefits of participating in Olympiad programs?",
      answer:
        "Olympiad participation enhances critical thinking, problem-solving skills, and academic excellence. Our alumni have gained admission to prestigious universities worldwide including MIT, Harvard, Yale, Cambridge, and Carnegie Mellon. You'll also join a community of like-minded peers and receive recognition for your achievements.",
    },
    {
      question: "Can I participate in multiple Olympiad disciplines?",
      answer:
        "Yes! We encourage students to explore multiple disciplines if they have the interest and capacity. Many successful participants compete in more than one Olympiad, as the skills often complement each other, especially between Mathematics and Physics or Computing.",
    },
    {
      question: "How are students selected for international competitions?",
      answer:
        "Students are selected through a rigorous process starting with school-level competitions, followed by bootcamps and selection tests. Top performers in bootcamps are invited to intensive training camps, after which the best performers are selected to represent Rwanda at international competitions.",
    },
    {
      question: "What support does ROP provide for international competitions?",
      answer:
        "ROP covers travel expenses, accommodation, registration fees, and provides comprehensive preparation for students selected to represent Rwanda internationally. We also provide mentorship, study materials, and intensive training sessions leading up to the competitions.",
    },
    {
      question: "How can my school get involved with ROP?",
      answer:
        "Schools can partner with ROP by encouraging students to participate, hosting local competitions, and supporting training sessions. Contact us through our website or email to discuss partnership opportunities and how to establish Olympiad clubs at your school.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold text-[#0C1E33] mb-4">
            Frequently Asked <span className="text-[#0891B2]">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the Rwanda Olympiad Program
            and how you can get involved
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="items-center max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-[#0C1E33] hover:text-[#0891B2] py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0891B2] hover:bg-[#0891B2]/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
