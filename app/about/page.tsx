import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <BackButton />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="px-12 pt-[180px] pb-[80px]">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <h1 className="text-[60px] font-normal text-black leading-normal">
            Designing software where complexity feels simple.
          </h1>

          <div className="flex flex-col gap-0">
            <p className="text-[18px] font-normal text-black leading-[28px]">
              {`I'm a Senior Experience Designer with over 8 years of experience crafting intuitive
              digital products. I work at `}
              <a
                href="https://www.slalombuild.com/industries"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline"
              >
                Slalom&apos;s Build
              </a>
              {`, where I help clients design and launch solutions that drive real user impact and
              measurable business value.`}
            </p>
            <br />
            <p className="text-[18px] font-normal text-black leading-[28px]">
              {`Outside of work, I enjoy hands-on projects—I'm currently building a wooden shoe rack
              and perfecting the art of frothing milk for the ideal morning coffee.`}
            </p>
          </div>

          <div className="relative w-[264px] h-[264px] rounded-sm overflow-hidden">
            <Image
              src="/images/about/avatar.png"
              alt="Chelsea Hwang"
              fill
              className="object-cover"
              sizes="264px"
            />
          </div>
        </div>
      </section>

      {/* ── 2. EXPERIENCE ───────────────────────────────────────── */}
      <section className="px-12 py-6">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-[#3b3b3b] leading-[36px]">Experience</h2>

          {/* Job 1 */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2022 – 2025</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Senior Experience Designer at{" "}
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
                Building and leading design for products across fintech, automotive, technology,
                and other sectors—adapting to the unique challenges of each industry. I lead design
                workstreams across a range of projects, from concept to execution.
              </p>
            </div>
          </div>

          {/* Job 2 */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2020 – 2022</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Experience Designer at{" "}
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
                Designing digital products across fintech, automotive, technology, and other
                sectors. I was part of design work streams from concept to delivery, contributing
                to user research, ideation, and execution in collaboration with cross-functional
                teams.
              </p>
            </div>
          </div>

          {/* Job 3 */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2020 – 2023</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Freelance &amp; Side Projects
              </p>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                Visual Designer for{" "}
                <a
                  href="https://hellodemello.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  Demello
                </a>
                , Founding Designer for{" "}
                <a
                  href="https://www.producthunt.com/posts/puffin-maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  Puffin
                </a>{" "}
                (Side Project) and a Product Designer for{" "}
                <a
                  href="https://www.360lending.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  360 Lending
                </a>
                .
              </p>
            </div>
          </div>

          {/* Job 4 */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2018 – 2020</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Product Designer at{" "}
                <a
                  href="https://getsensibill.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Sensibill
                </a>
              </p>
              <p className="text-[18px] font-normal text-black leading-[28px]">
                Designing mobile experiences for self-employed users on iOS and Android—helping
                them manage expenses and stay organized for tax submissions.
              </p>
            </div>
          </div>

          {/* Job 5 */}
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">2016 – 2018</p>
            <div>
              <p className="text-[18px] font-semibold text-black leading-[28px]">
                Product Designer at{" "}
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
                Designing an account management product for investors and KYC (Know Your Client)
                experience in collaboration with senior designers, product owners, managers,
                engineers, and user researchers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. EDUCATION ────────────────────────────────────────── */}
      <section className="px-12 py-6">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-[#3b3b3b] leading-[36px]">Education</h2>

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

      {/* ── 4. CONTACT ──────────────────────────────────────────── */}
      <section className="px-12 py-6 pb-[80px]">
        <div className="flex flex-col gap-8 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-[#3b3b3b] leading-[36px]">Contact</h2>

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
