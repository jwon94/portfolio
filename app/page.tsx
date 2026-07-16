import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const projects: {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string | null;
  video?: string;
  imageAlt: string;
  href: string;
  aspectRatio: string;
  cursorShape: string;
  cursorColor: string;
}[] = [
  {
    id: "turbotax",
    date: "2025 October - 2026 May / Lead Product Designer",
    title: "Driving conversion across the TurboTax acquisition funnel",
    description:
      "Led product design across Intuit TurboTax's full acquisition funnel, redesigning promotional landing pages to boost visitor-to-sign-in conversion and restructuring the in-product service selection flow to drive higher expert tier adoption.",
    image: null,
    video: "/videos/turbotaxlanding.mp4",
    imageAlt: "TurboTax acquisition funnel redesign — landing pages and service selection",
    href: "/newproject",
    aspectRatio: "aspect-[4/2.2]",
    cursorShape: "flower",
    cursorColor: "#FE8F00",
  },
  {
    id: "cppib",
    date: "2024 July - 2024 November / Lead Product Designer",
    title: "Designing an enterprise scenario planning tool that simplified complex financial workflows",
    description:
      "Led end-to-end UX design of an enterprise financial reporting platform for investment performance managers, replacing manual Excel workflows that took 8+ hours per report.",
    image: "/images/cppib.png",
    imageAlt: "Scenario Builder enterprise platform for investment performance managers",
    href: "/greenwealth",
    aspectRatio: "aspect-[4096/2665]",
    cursorShape: "oval",
    cursorColor: "#BDBCFA",
  },
  {
    id: "aws",
    date: "2023 July - 2023 December / Senior Product Designer",
    title: "Designing a video learning platform",
    description:
      "Built a video learning platform from 0 to 1, leading discovery, end-to-end experience design, and visual direction. The design concepts were compelling enough to secure ~$400K in product funding from AWS leadership to continue building.",
    image: "/images/cloudcast/awslanding.png",
    imageAlt: "AWS immersive video learning platform for engineers",
    href: "/aws",
    aspectRatio: "aspect-[3097/1814]",
    cursorShape: "doubleflower",
    cursorColor: "#84E2CB",
  },
  {
    id: "slalom-community",
    date: "2023 January - 2023 June / Design Community Lead",
    title: "Leading a design learning program that scaled to 30+ designers at Slalom Build",
    description:
      "Founded and scaled a designer study group at Slalom Build, growing from 8 to 30+ participants. Built a sustained culture of peer mentorship and continuous skill development across the design team.",
    image: "/images/slalom/survey.svg",
    imageAlt: "Slalom Build design learning community",
    href: "/slalom",
    aspectRatio: "aspect-[4008/1852]",
    cursorShape: "flower",
    cursorColor: "#EFDBD5",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Projects */}
      <div id="projects" className="scroll-mt-24" />
      {projects.map((project, index) => (
        <section
          key={project.id}
          className={`flex flex-col gap-8 px-12 ${index === 0 ? 'pt-[120px] pb-[60px]' : 'py-[60px]'}`}
        >
          <div className="flex flex-col gap-2 max-w-[900px]">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
              {project.date}
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href={project.href}
                className="text-[24px] font-normal text-black leading-[28px] hover:underline"
              >
                {project.title}
              </Link>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                {project.description}
              </p>
            </div>
          </div>

          <Link
            href={project.href}
            data-view-cursor
            data-cursor-shape={project.cursorShape}
            data-cursor-color={project.cursorColor}
            className={`relative block w-full max-w-[1100px] ${project.aspectRatio} hover:opacity-90 transition-opacity cursor-none`}
          >
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            ) : project.image ? (
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            ) : (
              <div className="absolute inset-0 bg-[#E0E0E0] rounded-xl" />
            )}
          </Link>
        </section>
      ))}

      <Footer />
    </main>
  );
}
