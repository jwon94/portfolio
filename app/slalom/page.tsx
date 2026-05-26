import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export default function SlalomPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <BackButton />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="px-12 pt-[180px] pb-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
            2024 January / Lead Designer
          </p>
          <h1 className="text-[28px] font-normal text-black leading-[36px]">
            Building a Co-Learning Community for Designers at Slalom Build
          </h1>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Led a design study group at Slalom that grew from 8 to 30+ participants, fostering a
            strong culture of continuous learning and community.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[4008/1852] rounded-xl overflow-hidden">
          <Image
            src="/images/slalom/hero.png"
            alt="Slalom design community"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
            priority
          />
        </div>
      </section>

      {/* ── 2. HOW IT BEGAN ─────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">How it Began</p>
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            How Do We Stay Accountable to Our Own Growth?
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            As a senior experience designer, I found myself and my peers often reflecting on areas
            we wanted to improve—facilitation, coding, prototyping—but struggling to make space for
            it amidst fast-paced consulting work. It became clear that many of us were trying to
            grow in isolation. I began to wonder: what if we could grow together?
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[4008/1852] rounded-xl overflow-hidden">
          <Image
            src="/images/slalom/how-it-began.png"
            alt="How the community began"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 3. SHARED IDEA ──────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            From a Shared Idea to a Designer Learning Community
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            I reached out to my colleague Ryan to share an idea: what if we created a lightweight
            co-learning group where designers could grow together? We were both looking to improve
            in areas like facilitation, Figma prototyping, and leveraging AI—but we also wondered
            what other designers were curious about. Rather than guessing, we decided to ask.
          </p>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            We shared it through Slalom&apos;s monthly design announcements, and thanks to that channel,
            we saw about a 20% response rate—around 25 designers. The results pointed to a clear
            theme: AI was top of mind. This was early 2024, and with the rapid rise of generative
            tools, designers were eager to explore how AI could support their workflows.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/508] rounded-xl overflow-hidden">
          <Image
            src="/images/slalom/shared-idea.png"
            alt="From a shared idea to a designer learning community"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 4. FLEXIBILITY ──────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Designing for Flexibility in a Fast-Paced Consulting Environment
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Rather than over-engineering the format, we kept it lightweight and adaptable. Our first
            AI-focused session brought together 8 designers. Aware of the challenges in coordinating
            across time zones and client demands, we structured the sessions to be flexible and
            low-lift. To kick things off, Ryan and I organized a quick, focused workshop to guide
            the conversation in our first session.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/1552] rounded-xl overflow-hidden">
          <Image
            src="/images/slalom/flexibility.png"
            alt="Flexible session structure"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 5. FACILITATORS ─────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            The Role of Facilitators in Driving Productive Sessions
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Recognizing the importance of structured guidance in collaborative settings, we
            incorporated facilitators into our sessions. Each session was led by a volunteer
            facilitator who guided discussions, encouraged participation, and ensured that sessions
            remained productive and inclusive.
          </p>
        </div>

        <div className="mt-8 w-full max-w-[1100px] bg-[#f5f5f5] rounded-xl overflow-hidden py-1">
          <div className="relative w-full aspect-[1100/553]">
            <Image
              src="/images/slalom/facilitators.png"
              alt="Facilitators driving productive sessions"
              fill
              className="object-cover"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>
      </section>

      {/* ── 6. OUTCOMES ─────────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">Outcomes</h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Our inaugural session on AI attracted eight designers and set the tone for future
            meetings. As word spread, participation grew, with over 30 designers engaging in
            subsequent sessions. The inclusion of facilitators not only enriched the learning
            experience but also empowered team members to take on leadership roles, further
            strengthening our design community.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/508] rounded-xl overflow-hidden">
          <Image
            src="/images/slalom/outcomes.png"
            alt="Community outcomes"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
