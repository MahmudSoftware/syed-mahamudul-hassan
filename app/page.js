import ScrollToTop from "@/components/common/ScrollToTop";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Skills from "@/components/Home/Skills";
import WorkExperience from "@/components/Home/WorkExperience";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syed Mahamudul Hassan",
    alternateName: ["Mahamudul Hassan", "Syed Mahamudul Hassan"],
    image:
      "https://syed-mahamudul-hassan.vercel.app/syed-mahamudul-hassan.png",
    jobTitle: "Full Stack Web Developer",
    url: "https://syed-mahamudul-hassan.vercel.app",
    sameAs: [
      "https://www.facebook.com/syed.mahamudul.hassan",
      "https://www.instagram.com/syed.mahamudul.hassan",
      "https://www.linkedin.com/in/syed-mahamudul-hassan",
      "https://github.com/syed-mahamudul-hassan",
      "https://x.com/syedmahamudulh",
    ],
    description:
      "Syed Mahamudul Hassan is a Bangladeshi Full Stack Web Developer skilled in PHP, Laravel, JavaScript, React, Next.js, Node.js, Git, CI/CD, and MongoDB. He is a passionate developer, passionate about creating production-ready web applications.",
  };
  return (
    <>
      {/* ✅ JSON-LD structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="space-y-16 sm:space-y-24">
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Contact />
        <Services />
        <Skills />
        <ScrollToTop />
      </div>
    </>
  );
}
