import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

function SolutionIcon() {
  return (
    <div className="grid grid-cols-2 w-[50px] h-[50px]" style={{ gap: 0 }}>
      <div style={{ background: "#888" }} />
      <div style={{ background: "#333" }} />
      <div style={{ background: "#555" }} />
      <div style={{ background: "#111" }} />
    </div>
  );
}

export default function CloudcastPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <BackButton />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="px-12 pt-[180px] pb-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
            2023 July - 2023 December / Senior Designer
          </p>
          <h1 className="text-[28px] font-normal text-black leading-[36px]">
            Designing an Immersive Video Learning Experience for Engineers
          </h1>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Designed and launched the full MVP for beta testing with in house 1k+ developers,
            helping secure funding through design concepts and product vision.{" "}
            <span className="text-[#a1a1a1]">
              *Client name has been white-labeled due to NDA requirements.
            </span>
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[4008/2200] rounded-xl overflow-hidden">
          <Image
            src="/images/cloudcast/hero.png"
            alt="CloudCastTV hero"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
            priority
          />
        </div>
      </section>

      {/* ── 2. PROBLEM ──────────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">Problem</p>
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Cloud Engineers Face Friction in Finding the Right Resources
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Cloud engineers often struggle to find precise learning resources, frequently
            switching between four to different tools and manually filtering out irrelevant
            content. On average, they lose 3–4 hours each week just trying to locate the
            right materials.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/618] rounded-xl overflow-hidden">
          <Image
            src="/images/cloudcast/problem.png"
            alt="Problem — fragmented learning tools"
            fill
            className="object-contain"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 3. OBJECTIVE ────────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">Objective</p>
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Create a Single Platform for Fast, Efficient Content Discovery by Technologists
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            The vision for CloudCastTV is a streaming platform for cloud engineers,
            centralizing technical content to simplify learning and boost productivity.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/388] rounded-xl overflow-hidden">
          <Image
            src="/images/cloudcast/objective.png"
            alt="Objective — single platform"
            fill
            className="object-contain"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 4. BUSINESS OPPORTUNITY ─────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
            Business Opportunity
          </p>
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Driving Product Adoption Through Data, Ecosystem Ownership, and Strategic Content.
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            By owning first-party viewership data, CloudCastTV can track user behavior,
            optimize content, and drive smarter, more personalized learning, boosting adoption
            and product education.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/428] rounded-xl overflow-hidden">
          <Image
            src="/images/cloudcast/business.png"
            alt="Business opportunity diagram"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 5. DESIGN SOLUTION MARKER ───────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-4 max-w-[900px]">
          <h2 className="text-[40px] font-normal text-black leading-[48px]">Design Solution</h2>
        </div>
      </section>

      {/* ── 6. LANDING EXPERIENCE ───────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Landing Experience with Curated Content for Technologists.
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              When users arrive, they see content tailored to their interests and technical
              focus. The layout is organized into clear sections, making it easy to find
              high-value content that supports their learning and workflow.
            </p>
          </div>

          <div className="relative mt-8 w-full aspect-[1344/607] rounded-xl overflow-hidden">
            <Image
              src="/images/cloudcast/landing.png"
              alt="CloudCastTV landing experience"
              fill
              className="object-contain"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>
        </div>
      </section>

      {/* ── 7. HERO SECTION ─────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Hero Section Featuring Key Event Promotions
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              The hero section captures attention instantly, guiding users to the most valuable
              content and encouraging deeper engagement from the start.
            </p>
          </div>

          <div className="relative mt-8 w-full aspect-[1344/600] rounded-xl overflow-hidden">
            <Image
              src="/images/cloudcast/hero-section.png"
              alt="CloudCastTV hero section with event promotions"
              fill
              className="object-contain"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>
        </div>
      </section>

      {/* ── 8. PROMOTIONAL CONTENT ──────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Promotional Content to Boost Retention
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              The landing page grabs attention fast, using clear visuals and navigation to
              guide users to relevant, trending content without overwhelm.
            </p>
          </div>

          <div className="relative mt-8 w-full aspect-[1344/700] rounded-xl overflow-hidden">
            <Image
              src="/images/cloudcast/promotional.png"
              alt="Promotional content section"
              fill
              className="object-contain"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>
        </div>
      </section>

      {/* ── 9. QUICK CONTENT PREVIEW ────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Quick Content Preview for Effortless Discovery
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              Technologists need quick, frictionless access to relevant content. The landing
              page surfaces personalized, trending videos with interactive previews, helping
              users quickly assess and jump to what matters—no deep dive needed.
            </p>
          </div>

          <div className="relative mt-8 w-full aspect-[1344/1011] rounded-xl overflow-hidden">
            <Image
              src="/images/cloudcast/preview.png"
              alt="Quick content preview interface"
              fill
              className="object-contain"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>
        </div>
      </section>

      {/* ── 10. SEAMLESS VIEWING EXPERIENCE ─────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Designing for Seamless Viewing Experience
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              CloudCastTV offers an intuitive experience that helps users easily find content
              aligned with their learning goals, ensuring seamless, focused viewing from start
              to finish.
            </p>
          </div>

          {/* Main wide image */}
          <div className="relative mt-8 w-full aspect-[1344/895] rounded-xl overflow-hidden">
            <Image
              src="/images/cloudcast/viewing-main.png"
              alt="CloudCastTV seamless viewing"
              fill
              className="object-cover"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>

          {/* 2-col row 1 */}
          <div className="mt-6 flex gap-6 w-full">
            <div className="relative flex-1 aspect-[682/552] rounded-xl overflow-hidden">
              <Image
                src="/images/cloudcast/viewing-1.png"
                alt="Viewing screen detail 1"
                fill
                className="object-contain"
                sizes="50vw"
              />
            </div>
            <div className="relative flex-1 aspect-[682/552] rounded-xl overflow-hidden">
              <Image
                src="/images/cloudcast/viewing-2.png"
                alt="Viewing screen detail 2"
                fill
                className="object-contain"
                sizes="50vw"
              />
            </div>
          </div>

          {/* 2-col row 2 */}
          <div className="mt-6 flex gap-6 w-full">
            <div className="relative flex-1 aspect-[682/552] rounded-xl overflow-hidden">
              <Image
                src="/images/cloudcast/viewing-3.png"
                alt="Viewing screen detail 3"
                fill
                className="object-contain"
                sizes="50vw"
              />
            </div>
            <div className="relative flex-1 aspect-[682/552] rounded-xl overflow-hidden">
              <Image
                src="/images/cloudcast/viewing-4.png"
                alt="Viewing screen detail 4"
                fill
                className="object-contain"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. RESPONSIVE DESIGN ───────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Designing with Multitasking Users in Mind Through Responsive Design
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              CloudCast is built for how modern technologists learn—across devices, screens,
              and contexts. Whether multitasking or on the go, the responsive design ensures
              a seamless, intuitive experience.
            </p>
          </div>

          <div className="relative mt-8 w-full aspect-[1344/476] rounded-xl overflow-hidden">
            <Image
              src="/images/cloudcast/responsive-1.png"
              alt="Responsive design — multi-device"
              fill
              className="object-contain"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>

          <div className="relative mt-6 w-full aspect-[1344/445] rounded-xl overflow-hidden">
            <Image
              src="/images/cloudcast/responsive-2.png"
              alt="Responsive design — tablet and mobile"
              fill
              className="object-contain"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
