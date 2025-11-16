import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Programs } from "@/components/programs";
import { Activities } from "@/components/activities";
import { Global } from "@/components/global";
import { SuccessStories } from "@/components/success-stories";
import { Partners } from "@/components/partners";
// import { News } from "@/components/news";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Mathematics, Physics, Computing in Rwanda",
  description:
    "Rwanda Olympiad Program trains talented students in Mathematics, Physics, Informatics, and AI. Join 500+ students who gained admission to MIT, Harvard, Yale, Cambridge, Carnegie Mellon & more top universities.",
  keywords: [
    "Rwanda Olympiad Program",
    "ROP Rwanda",
    "Mathematics Olympiad Rwanda",
    "Physics Olympiad Rwanda",
    "Computing Olympiad Rwanda",
    "AI Olympiad Rwanda",
    "STEM Rwanda",
    "Olympiad training Kigali",
    "International competitions Rwanda",
    "Science education Rwanda",
  ],
  openGraph: {
    title: "Rwanda Olympiad Program | Home",
    description:
      "Train with Rwanda's #1 STEM Olympiad program. Mathematics, Physics, Computing & AI training leading to top universities worldwide.",
    url: "https://rwandaolympiad.org",
    type: "website",
  },
  alternates: {
    canonical: "https://rwandaolympiad.org",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Programs />
        <Activities />
        <Global />
        <SuccessStories />
        <Partners />
        {/* <News /> */}
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
