import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

function GreyBlock({ className = "" }: { className?: string }) {
  return <div className={`w-full rounded-xl bg-[#E0E0E0] ${className}`} />;
}

function BeforeAfterGrid() {
  return (
    <div className="mt-6 flex gap-3 w-full">
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-[18px] text-[#a1a1a1] leading-[28px]">Before</p>
        <div className="w-full aspect-square rounded-xl bg-[#f4f4f4]" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-[18px] text-[#a1a1a1] leading-[28px]">After</p>
        <div className="w-full aspect-square rounded-xl bg-[#ffeceb]" />
      </div>
    </div>
  );
}

export default function TurboTaxPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <BackButton />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="px-12 pt-[180px] pb-12">
        <div className="flex flex-col gap-2 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
            2025 October - 2026 May / Lead Product Designer
          </p>
          <h1 className="text-[28px] leading-[36px] lg:text-[40px] font-normal text-black lg:leading-[48px]">
            Driving conversion across the TurboTax acquisition funnel
          </h1>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            As the lead designer for TurboTax&apos;s top-of-funnel and mid-funnel, I led the
            design and engineering team to tackle two key conversion problems:
            improving sign-in rates across top-of-funnel pages and increasing
            expert-assisted tier selection during onboarding.
          </p>
        </div>

        <video
          src="/videos/turbotaxlanding.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="mt-8 w-full max-w-[1100px] rounded-xl"
        />
      </section>

      {/* ── 2. DESIGN SOLUTION HEADER ───────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-4 max-w-[900px]">
          <h2 className="text-[22px] leading-[30px] lg:text-[32px] font-normal text-black lg:leading-[40px]">Design Solution</h2>
        </div>
      </section>

      {/* ── 3. TOP OF FUNNEL — SEGMENT PAGES ───────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-2 max-w-[900px]">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
              Top of Funnel Solution
            </p>
            <h3 className="text-[20px] leading-[28px] lg:text-[28px] font-normal text-black lg:leading-[36px]">
              Improving sign-in rates across front door pages
            </h3>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              Original segment landing pages led with generic product features, making it hard for
              each customer type to see the value of TurboTax for their specific tax
              situation. I redesigned over 10 segment and promotional pages with tailored
              messaging and consistent design patterns, driving{" "}
              <strong>desktop traffic-to-auth improvements of up to 33%</strong> and{" "}
              <strong>mobile traffic-to-auth improvements of up to 113%</strong> across individual pages.
            </p>
          </div>

          <div className="mt-6 flex gap-3 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-[18px] text-[#a1a1a1] leading-[28px]">Before</p>
              <video
                src="/videos/selandingold.mp4"
                width={964}
                height={1080}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-[18px] text-[#a1a1a1] leading-[28px]">After</p>
              <video
                src="/videos/selandingnew.mp4"
                width={964}
                height={1080}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TOP OF FUNNEL — SWITCH & SAVE ───────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-2 max-w-[900px]">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
              Top of Funnel Solution
            </p>
            <h3 className="text-[20px] leading-[28px] lg:text-[28px] font-normal text-black lg:leading-[36px]">
              Switch and Save promotion highlight
            </h3>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              The Switch &amp; Save promotion had an existing style but lacked enough visual
              emphasis on the expert-assisted offer, causing it to get lost among other
              service tiers. I redesigned the promotional component with a stronger visual
              treatment, driving <strong>a 3.2% increase</strong> in customers choosing the
              expert-assisted filing tier.
            </p>
          </div>

          <div className="mt-6 flex gap-3 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-[18px] text-[#a1a1a1] leading-[28px]">Before</p>
              <Image
                src="/images/ssold.png"
                alt="Switch and Save — before"
                width={2728}
                height={3080}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-[18px] text-[#a1a1a1] leading-[28px]">After</p>
              <Image
                src="/images/ssnew.png"
                alt="Switch and Save — after"
                width={2728}
                height={3080}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. MID FUNNEL — SERVICE SELECTION ──────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-2 max-w-[900px]">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
              Mid Funnel Solution
            </p>
            <h3 className="text-[20px] leading-[28px] lg:text-[28px] font-normal text-black lg:leading-[36px]">
              Restructuring the service selection flow inside the product
            </h3>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              Users landed on a single screen asking them to choose a service tier with no
              pricing, no context, and all options presented as equals, right after a
              cognitively demanding tax checklist. I restructured the flow into two focused
              steps, capturing intent first then presenting pricing and offer context,
              driving a <strong>7% increase</strong> in customers choosing the
              expert-assisted filing tier among new customers.
            </p>
          </div>

          <div className="mt-6 flex gap-3 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-[18px] text-[#a1a1a1] leading-[28px]">Before</p>
              <video
                src="/videos/oldflow.mp4"
                width={1364}
                height={1528}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-[18px] text-[#a1a1a1] leading-[28px]">After</p>
              <video
                src="/videos/newflow.mp4"
                width={1364}
                height={1528}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
