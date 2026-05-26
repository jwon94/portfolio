import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PixelGame from "@/components/PixelGame";

const projects = [
  {
    id: "cloudcast",
    date: "2023 July - 2023 December / Senior Designer",
    title: "Designing an Immersive Video Learning Experience for Engineers",
    description:
      "Designed and launched the full MVP for beta testing with in house 1k+ developers, helping secure funding through design concepts and product vision.",
    image: "/images/cloudcast.png",
    imageAlt: "CloudCast TV learning experience",
    href: "/cloudcast",
    aspectRatio: "aspect-[4008/2200]",
  },
  {
    id: "cppib",
    date: "2024 July - 2024 November / Lead Designer",
    title: "Designing Scenario Builder for Investment Performance Managers",
    description:
      "Led end-to-end design of an enterprise platform, streamlining complex financial workflows and cutting weekly operational hours by 50%.",
    image: "/images/cppib.png",
    imageAlt: "Scenario Builder for Investment Performance Managers",
    href: "/greenwealth",
    aspectRatio: "aspect-[4096/2665]",
  },
  {
    id: "puffin",
    date: "2021 January - 2023 December / Product Designer",
    title: "Making Trip Planning Experience More Exciting",
    description:
      "Built a collaborative trip-planning tool built with three designers and two engineers. Featured on Product Hunt in 2022.",
    image: "/images/puffin.png",
    imageAlt: "Puffin trip planning app",
    href: "/puffin",
    aspectRatio: "aspect-[4008/1956]",
  },
  {
    id: "slalom-community",
    date: "2023 January - 2023 June / Life at Slalom",
    title: "Building a Co-Learning Community for Designers at Slalom Build",
    description:
      "Led a design study group at Slalom that grew from 8 to 30+ participants, fostering a strong culture of continuous learning and community.",
    image: "/images/slalom-community.png",
    imageAlt: "Slalom design community Slack post",
    href: "/slalom",
    aspectRatio: "aspect-[4008/1852]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <Navbar />

      {/* Hero */}
      <section className="px-12 pt-[180px] pb-8">
        <div className="flex flex-col gap-[11px] max-w-[900px]">
          <p className="text-[40px] font-normal text-black leading-normal">
            {"Hello, I'm Chelsea, a Senior Product Designer built across fintech, startups and consulting."}
          </p>
          <p className="text-[24px] font-normal text-black leading-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
            {"Previously at Intuit TurboTax, Slalom Build, Questrade & Sensibill."}
          </p>
        </div>
      </section>

      {/* Pixel Game */}
      <section className="px-12 pb-[60px]">
        <div className="relative w-full max-w-[1100px] overflow-hidden" style={{ aspectRatio: '1344/600', borderRadius: '4px' }}>
          <PixelGame theme="toronto" />
        </div>
        <div className="mt-4 w-full max-w-[1100px] flex items-center gap-2 flex-wrap font-mono text-xs text-[#666]">
          <span>Click the game then use</span>
          <span className="bg-white border border-[#d1d1d1] px-2 py-1 rounded font-bold shadow-[0_1px_0_#d1d1d1]">← →</span>
          <span>to walk ·</span>
          <span className="bg-white border border-[#d1d1d1] px-2 py-1 rounded font-bold shadow-[0_1px_0_#d1d1d1]">↑</span>
          <span>or</span>
          <span className="bg-white border border-[#d1d1d1] px-2 py-1 rounded font-bold shadow-[0_1px_0_#d1d1d1]">SPACE</span>
          <span>to jump</span>
        </div>
      </section>

      {/* Projects */}
      <div id="projects" className="scroll-mt-24" />
      {projects.map((project) => (
        <section
          key={project.id}
          className="flex flex-col gap-8 px-12 py-[60px]"
        >
          <div className="flex flex-col gap-4 max-w-[900px]">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
              {project.date}
            </p>
            <div className="flex flex-col gap-1">
              <Link
                href={project.href}
                className="text-[24px] font-normal text-black leading-[28px] hover:underline"
              >
                {project.title}
              </Link>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                {project.description}
              </p>
              <Link
                href={project.href}
                className="mt-1 text-[18px] font-semibold text-black underline leading-[28px] hover:opacity-70 transition-opacity w-fit"
              >
                See Detail
              </Link>
            </div>
          </div>

          <Link
            href={project.href}
            className={`relative block w-full max-w-[1100px] ${project.aspectRatio} hover:opacity-90 transition-opacity`}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover rounded-sm"
              sizes="(max-width: 768px) 100vw, 1100px"
            />
          </Link>
        </section>
      ))}

      <Footer />
    </main>
  );
}
