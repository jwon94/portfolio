import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <BackButton />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="px-12 pt-[180px] pb-[80px]">
        <div className="flex flex-col gap-2 max-w-[900px]">
          <h1 className="text-[28px] leading-[36px] lg:text-[40px] font-normal text-black lg:leading-[48px]">
            I love designing software where complexity feels simple.
          </h1>

          <div className="flex flex-col gap-0">
            <p className="text-[18px] font-normal text-black leading-[28px]">
              {`I'm a Senior Product Designer with over 10 years of experience crafting intuitive
              digital products. I currently work at `}
              <a
                href="https://turbotax.intuit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline"
              >
                Intuit TurboTax
              </a>
              {`, where I own design across marketing and in-product flows while leading early-stage product strategy.`}
            </p>
          </div>

        </div>
      </section>

      {/* ── 2. EXPERIENCE ───────────────────────────────────────── */}
      <section className="px-12 py-6">
        <div className="flex flex-col gap-2 max-w-[900px]">
          <h2 className="text-[22px] leading-[30px] lg:text-[32px] font-normal text-black lg:leading-[40px]">Experience</h2>

          {/* TurboTax */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2025 – 2026</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Senior Product Designer •{" "}
                <a
                  href="https://turbotax.intuit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Intuit TurboTax
                </a>
              </p>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                Led end-to-end product design and UX strategy across the acquisition funnel,
                driving conversion through data-informed design and 0-to-1 product discovery.
              </p>
            </div>
          </div>

          {/* Slalom Build */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2020 – 2025</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Senior Product Designer •{" "}
                <a
                  href="https://www.slalombuild.com/industries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Slalom Build
                </a>
              </p>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                Product design for 8+ clients across fintech, enterprise, and tech, specializing
                in 0-to-1 product builds, AI tooling, and complex enterprise platforms.
              </p>
            </div>
          </div>

          {/* Sensibill */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2018 – 2020</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Product Designer •{" "}
                <a
                  href="https://getsensibill.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Sensibill (Currently Q2)
                </a>
              </p>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                Designed a native mobile app for iOS and Android, helping self-employed users
                manage expenses and simplify tax submissions.
              </p>
            </div>
          </div>

          {/* Questrade */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2016 – 2018</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Product Designer •{" "}
                <a
                  href="https://www.questrade.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Questrade
                </a>
              </p>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                Designed investor-facing product experiences including a KYC onboarding flow
                that simplified compliance workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INDEPENDENT PRACTICE ─────────────────────────────── */}
      <section className="px-12 py-6">
        <div className="flex flex-col gap-2 max-w-[900px]">
          <h2 className="text-[22px] leading-[30px] lg:text-[32px] font-normal text-black lg:leading-[40px]">Independent Practice</h2>

          {/* Puffin */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2020 – 2023</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Product Designer •{" "}
                <a
                  href="https://www.producthunt.com/posts/puffin-maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Puffin
                </a>
              </p>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                Co-designed and shipped a consumer trip-planning app with cross-functional
                collaborators, growing to 500+ users.
              </p>
            </div>
          </div>

          {/* 360 Lending */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2020 – 2021</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Freelance Product Designer •{" "}
                <a
                  href="https://www.360lending.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  360 Lending
                </a>
              </p>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                Partnered with C-suite stakeholders to redesign a fintech mortgage application
                flow for loan borrowers.
              </p>
            </div>
          </div>

          {/* De Mello */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2020</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Freelance Visual Designer •{" "}
                <a
                  href="https://hellodemello.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  De Mello
                </a>
              </p>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                Designed brand and visual identity across digital and offline touchpoints for
                a consumer coffee brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. EDUCATION ────────────────────────────────────────── */}
      <section className="px-12 py-6">
        <div className="flex flex-col gap-2 max-w-[900px]">
          <h2 className="text-[22px] leading-[30px] lg:text-[32px] font-normal text-black lg:leading-[40px]">Education</h2>

          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2012 – 2016</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                York University &amp; Sheridan Design
              </p>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                Bachelor of Design, York/Sheridan Joint Program (YSDN)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CONTACT ──────────────────────────────────────────── */}
      <section className="px-12 py-6 pb-[80px]">
        <div className="flex flex-col gap-2 max-w-[900px]">
          <h2 className="text-[22px] leading-[30px] lg:text-[32px] font-normal text-black lg:leading-[40px]">Contact</h2>

          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">Email Address</p>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              hjw.chelsea@gmail.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
