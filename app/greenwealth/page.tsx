import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

/* ─── tiny helpers ─── */

function PhaseIcon({ variant }: { variant: "discovery" | "define" | "develop" | "solution" }) {
  const palettes: Record<string, [string, string, string, string]> = {
    discovery: ["#111", "#888", "#ccc", "#555"],
    define:    ["#ccc", "#111", "#888", "#333"],
    develop:   ["#555", "#ccc", "#111", "#888"],
    solution:  ["#888", "#333", "#555", "#111"],
  };
  const [a, b, c, d] = palettes[variant];
  return (
    <div
      className="grid grid-cols-2 w-[50px] h-[50px]"
      style={{ gap: 0 }}
    >
      <div style={{ background: a }} />
      <div style={{ background: b }} />
      <div style={{ background: c }} />
      <div style={{ background: d }} />
    </div>
  );
}

function InsightCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex flex-col gap-1 py-6 border-t border-[#e5e5e5]">
      <p className="text-[18px] font-semibold text-black leading-[24px]">{label}</p>
      <p className="text-[18px] font-normal text-black leading-[28px]">{body}</p>
    </div>
  );
}

function StrategyCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex flex-col gap-1 py-6 border-t border-[#e5e5e5]">
      <p className="text-[18px] font-semibold text-black leading-[24px]">{label}</p>
      <p className="text-[18px] font-normal text-black leading-[28px]">{body}</p>
    </div>
  );
}

/* ─── page ─── */

export default function GreenwealthPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <BackButton />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="px-12 pt-[180px] pb-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
            2024 July - 2024 November / Lead Designer
          </p>
          <h1 className="text-[28px] font-normal text-black leading-[36px]">
            Designing Scenario Builder for Investment Performance Managers
          </h1>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            I led the end-to-end design of an enterprise platform for EverGreen Wealth
            (Whitelabelled company), streamlining complex financial workflows and cutting
            weekly operational hours by 50%.{" "}
            <span className="text-[#a1a1a1]">
              *Client name has been white-labeled due to NDA requirements.
            </span>
          </p>
        </div>

        {/* Hero image */}
        <div className="relative mt-8 w-full max-w-[1100px] aspect-[4096/2666] rounded-xl overflow-hidden">
          <Image
            src="/images/greenwealth/hero.png"
            alt="CPPIB Scenario Builder hero"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
            priority
          />
        </div>
      </section>

      {/* ── 2. PROJECT CONTEXT ──────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
            Project Context
          </p>
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Custom Reporting for Complex Scenarios is Slow and Fragmented
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Performance managers analyze data across departments—such as Real Estate, Credit,
            and Private Equity—using various breakdowns by region, sector, currency, and
            benchmarks. However, due to limitations of the legacy tool and siloed workflows,
            they rely on manual Excel work to extract, clean, and reconcile data—leading to
            duplicated effort, delays, and increased risk of error.
          </p>
        </div>
      </section>

      {/* ── 3. BUSINESS PROBLEM ─────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
            Business Problem
          </p>
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            1,200+ Hours Lost Weekly Due to Inefficiencies — Across a Team of 50 Performance Managers
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            EverGreen Wealth's performance managers spend over 1,200 hours weekly on manual
            custom reporting. Each manager handles 3–5 report requests per week, with each
            taking 8+ hours due to complex data requirements and outdated, siloed tools.
          </p>
        </div>
      </section>

      {/* ── 4. PRODUCT GOAL ─────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[880px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
            Product Goal
          </p>
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Enable Performance Managers to Quickly Build Custom Reports
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Design an enterprise product that enables performance managers to generate complex
            investment reports quickly and accurately—eliminating manual effort, reducing errors,
            and streamlining cross-departmental reporting workflows.
          </p>
        </div>
      </section>

      {/* ── 5. DISCOVERY PHASE MARKER ───────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-4 max-w-[900px]">
          <h2 className="text-[40px] font-normal text-black leading-[48px]">Discovery</h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            During the discovery phase, I prioritized understanding the performance managers'
            workflows and responsibilities. In the first two weeks of the project, I conducted
            8 in-depth interview sessions with performance managers to learn how they currently
            build custom reports. This insight was critical to shaping a product that aligns
            with their needs and day-to-day tasks.
          </p>
        </div>
      </section>

      {/* ── 6. UNDERSTANDING ROLE ───────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Understanding the Role of Performance Managers at GreenWealth
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Performance managers at GreenWealth oversee and analyze the financial performance
            of investments and ensuring alignment with the organization's financial goals. Their
            responsibilities focus on performance measurements, analysis, and reporting, which
            helps to inform strategic investment decisions.
          </p>
        </div>
      </section>

      {/* ── 7. REVIEWING LEGACY ─────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Reviewing Legacy Products to Identify What Works and What Doesn&apos;t
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            During 1:1 interviews with performance managers, I asked them to walk me through
            their legacy products and highlight what works and what doesn&apos;t. While the tool
            is outdated, understanding the elements they still rely on helped identify valuable
            features worth retaining in the new experience.
          </p>
        </div>

        {/* Legacy product image */}
        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/986] rounded-xl overflow-hidden">
          <Image
            src="/images/greenwealth/legacy.png"
            alt="Legacy product screenshot"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 8. INSIGHTS ─────────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Insights from Performance Manager Interviews
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Given the complexity and nuance of their processes, these in-depth sessions were
            critical for uncovering actionable insights. Below are the key findings from the
            Discovery phase.
          </p>
        </div>

        <div className="mt-6 max-w-[900px]">
          <InsightCard
            label="Switching Between Tools Created Workflow Friction"
            body="Performance managers juggled two legacy systems and Excel, each with different logic—slowing them down and increasing error risk."
          />
          <InsightCard
            label="Full Data Visibility was Valued"
            body="Despite a cluttered UI in the legacy product, they valued seeing all available data fields for greater control and confidence."
          />
          <InsightCard
            label="Heavy Excel Use for Final Output"
            body="Despite a cluttered UI in the legacy product, they valued seeing all available data fields for greater control and confidence."
          />
          <InsightCard
            label="Often Duplicating Previous Reports"
            body="They often duplicated old reports and tweaked filters like date, region etc to save time."
          />
        </div>
      </section>

      {/* ── 9. DEFINE PHASE MARKER ──────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-4 max-w-[900px]">
          <h2 className="text-[40px] font-normal text-black leading-[48px]">Define</h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            After the discovery phase, I synthesized the insights and distilled them into key
            problems, which helped shape the design approach and direction.
          </p>
        </div>
      </section>

      {/* ── 10. TRANSLATING RESEARCH ────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Translating Research into Design Strategy
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            After conducting user research and multiple in-depth knowledge transfer (KT) sessions
            with the product manager and performance managers, I synthesized the information to
            define a clear and focused design strategy.
          </p>
        </div>

        <div className="mt-6 max-w-[900px]">
          <StrategyCard
            label="Flexibility"
            body="Performance managers value the ability to define custom logic on their own terms. They wanted a solution that offers flexibility to create and modify logic to suit their unique needs."
          />
          <StrategyCard
            label="Simplicity"
            body="Simplify complex processes to make them easy to understand and navigate, allowing users to perform tasks without unnecessary complications."
          />
          <StrategyCard
            label="Familiarity"
            body="Maintain the unique workflows and replicate patterns that the users were familiar with Excel to reduce the learning curve."
          />
        </div>
      </section>

      {/* ── 11. DEFINING MVP ────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Defining the first MVP for this Product
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Before diving into solutions, I led a collaborative session with the product manager,
            tech lead, and three business stakeholders (VP of Finance Performance, Senior Director
            Performance Management, Senior Performance Manager) define core features. The main
            challenge was aligning on the MVP, as the team often pushed for &quot;nice-to-have&quot;
            features. To address this, I facilitated a focused 1-hour workshop to prioritize and
            clearly define the core MVP.
          </p>
        </div>

        {/* Sticky notes image */}
        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/569] rounded-xl overflow-hidden">
          <Image
            src="/images/greenwealth/sticky.png"
            alt="MVP workshop sticky notes"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>

        {/* Organize workshop image */}
        <div className="relative mt-4 w-full max-w-[1100px] aspect-[1100/568] rounded-xl overflow-hidden">
          <Image
            src="/images/greenwealth/organize.png"
            alt="Workshop organization session"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 12. DEVELOP PHASE MARKER ────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-4 max-w-[900px]">
          <h2 className="text-[40px] font-normal text-black leading-[48px]">Develop</h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            To kick off the solution phase, I led a fast-paced workshop with the internal team
            to draft initial concepts. Given the tight six-week timeline, the process involved
            frequent white-boarding sessions with the core team to sketch ideas, define key use
            cases, and align on direction. I translated these concepts into Figma designs and
            maintained a tight iteration loop for rapid feedback and refinement.
          </p>
        </div>
      </section>

      {/* ── 13. CREATING CORE USERFLOW ──────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[880px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Creating Core Userflow Together
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            I facilitated a white-boarding session to map out the core use cases and define the
            main user flow. By first sketching a basic skeleton of the &quot;happy path,&quot; I gave
            the team a tangible starting point, which we then refined together through live
            feedback and iteration. This collaborative process helped align everyone on the
            foundational structure before moving into detailed design.
          </p>
        </div>

        {/* Userflow image */}
        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/465] rounded-xl overflow-hidden">
          <Image
            src="/images/greenwealth/userflow.png"
            alt="Core userflow whiteboard"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 14. DESIGNING BEST LAYOUT ───────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[880px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Designing the Best Layout for Performance Manager
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            To determine the most effective layout for scenario-building, I explored three
            low-fidelity options—each reflecting a different interaction model. My goal was to
            find the best way to support power users in building custom financial scenarios
            efficiently and confidently.
          </p>
        </div>

        {/* Layout options image */}
        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/1212] rounded-xl overflow-hidden">
          <Image
            src="/images/greenwealth/layout-options.png"
            alt="Low-fidelity layout options"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 15. EVALUATING TRADE-OFFS ───────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[880px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Evaluating Design Trade-Offs with Product and Engineering Stakeholders
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            I presented each low-fidelity option to stakeholders across product and engineering.
            We discussed trade-offs for each layout.
          </p>
        </div>

        <div className="mt-6 max-w-[900px]">
          <InsightCard
            label="High Effort, Low Impact"
            body="The first option requires significant front-end engineering effort but offers limited user value, making it difficult to justify the level of custom development."
          />
          <InsightCard
            label="Excel-Like Experience"
            body="Across all options, stakeholders emphasized the importance of preserving familiar data behaviors—such as tabular layouts and multi-step formulas—commonly found in Excel."
          />
          <InsightCard
            label="Lack of Guidance and Unclear Layout"
            body="The team raised concerns about Option 1 feeling too open-ended for new users, especially without guidance or visual grouping."
          />
        </div>
      </section>

      {/* ── 16. CHOOSING DESIGN PATH ────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Choosing the Right Design Path
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Initially, I was biased toward the first design option, as I believed it clearly
            represented the scenario being built. However, after discussions with the team and
            quick feedback sessions with performance managers, it became clear that users
            preferred an interface more aligned with their legacy tool. The first option felt
            overly complex and unfamiliar to them. Additionally, it posed significant front-end
            limitations and scope challenges, which led us to explore the third option further.
          </p>
        </div>

        {/* Option 3 image */}
        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/401] rounded-xl overflow-hidden">
          <Image
            src="/images/greenwealth/option3.png"
            alt="Layout option 3"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 17. DESIGN SOLUTION MARKER ──────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-4 max-w-[900px]">
          <h2 className="text-[40px] font-normal text-black leading-[48px]">Design Solution</h2>
        </div>
      </section>

      {/* ── 18. LAYOUT ALIGNED ──────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Layout Aligned with Users&apos; Logical Workflow
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            The final design approach prioritized a flow that mirrors how users naturally think
            through scenarios—starting with defining key parameters (e.g., dates, return type),
            then selecting metrics, and finally organizing the data. This structured sequence
            supports clarity, efficiency, and familiarity.
          </p>
        </div>

        {/* Layout solution image — full 1344px wide */}
        <div className="relative mt-8 w-full max-w-[1344px] aspect-[1344/604] rounded-xl overflow-hidden">
          <Image
            src="/images/greenwealth/layout-solution.png"
            alt="Final layout solution"
            fill
            className="object-cover"
            sizes="(max-width: 1344px) 100vw, 1344px"
          />
        </div>
      </section>

      {/* ── 19. HELPING USERS SORT (complex) ───────────────────── */}
      <section className="px-12 py-12">
        {/* Top: title + body + wide image */}
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Helping Users to Sort Through the Long List of Metrics Easily
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              The most important aspect for users was the ability to quickly select specific key
              metrics and perform metric aggregation. Users needed to view all available data,
              but also be able to quickly filter and select the relevant metrics for their reports.
            </p>
          </div>

          {/* Metrics image — wide */}
          <div className="relative mt-8 w-full aspect-[1344/599] rounded-xl overflow-hidden">
            <Image
              src="/images/greenwealth/metrics.png"
              alt="Metrics selection interface"
              fill
              className="object-cover"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>
        </div>

        {/* Two-column row 1: text left / group-select image right */}
        <div className="mt-8 flex gap-6 w-full max-w-[1344px]">
          <div className="flex-1 flex flex-col justify-center gap-2">
            <h3 className="text-[24px] font-normal text-black leading-[32px]">
              Improving Usability for Long Lists Through Group and Level Selection
            </h3>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              Users can navigate groupings in bulk, avoiding the need to manually sift through
              each grouping. This makes the process faster and more manageable.
            </p>
          </div>
          <div className="relative w-[660px] flex-shrink-0 aspect-[660/589] rounded-xl overflow-hidden">
            <Image
              src="/images/greenwealth/group-select.png"
              alt="Group select UI"
              fill
              className="object-cover"
              sizes="660px"
            />
          </div>
        </div>

        {/* Two-column row 2: text left / level-select image right */}
        <div className="mt-8 flex gap-6 w-full max-w-[1344px]">
          <div className="flex-1 flex flex-col justify-center gap-2">
            <h3 className="text-[24px] font-normal text-black leading-[32px]">
              Find Fields Instantly with Quick Search
            </h3>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              If users know the type of field they&apos;re looking for, the quick search feature
              helps them find it instantly—eliminating the need to scroll through long lists.
            </p>
          </div>
          <div className="relative w-[660px] flex-shrink-0 aspect-[660/589] rounded-xl overflow-hidden">
            <Image
              src="/images/greenwealth/level-select.png"
              alt="Level select UI"
              fill
              className="object-cover"
              sizes="660px"
            />
          </div>
        </div>
      </section>

      {/* ── 20. GIVE FLEXIBILITY (complex) ──────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Give Flexibility to Easily Include or Exclude Specific Types Quickly
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              A key feature for users is the ability to define which investment strategies to
              include in their metric calculations. The challenge was to give users the
              flexibility to easily include or exclude specific investment types or categories
              in their calculations through an intuitive interface.
            </p>
          </div>

          {/* Conditions image — wide */}
          <div className="relative mt-8 w-full aspect-[1344/700] rounded-xl overflow-hidden">
            <Image
              src="/images/greenwealth/conditions.png"
              alt="Conditions interface"
              fill
              className="object-cover"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>
        </div>

        {/* Two-column row: text left / conditions-detail image right */}
        <div className="mt-8 flex gap-6 w-full max-w-[1344px]">
          <div className="flex-1 flex flex-col justify-center gap-2">
            <h3 className="text-[24px] font-normal text-black leading-[32px]">
              Define Custom Logic with Conditions
            </h3>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              Users can define specific conditions to automatically filter data used in metric
              calculations. For example, when focusing on certain investment types, conditional
              logic surfaces only the relevant data—streamlining the workflow and reducing both
              manual effort and cognitive load.
            </p>
          </div>
          <div className="relative w-[660px] flex-shrink-0 aspect-[660/589] rounded-xl overflow-hidden">
            <Image
              src="/images/greenwealth/conditions-detail.png"
              alt="Conditions detail UI"
              fill
              className="object-cover"
              sizes="660px"
            />
          </div>
        </div>
      </section>

      {/* ── 21. LETTING USERS CHOOSE ────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[880px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Letting Users Choose How Data is Displayed
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            This solution provides users with a dedicated section where they can select how to
            organize their data in the final scenario. Users can define the specific category
            values and reorder the groupings in a way that makes sense for their analysis.
          </p>
        </div>

        {/* Data display image — wide */}
        <div className="relative mt-8 w-full max-w-[1344px] aspect-[1344/684] rounded-xl overflow-hidden">
          <Image
            src="/images/greenwealth/data-display.png"
            alt="Data display interface"
            fill
            className="object-cover"
            sizes="(max-width: 1344px) 100vw, 1344px"
          />
        </div>
      </section>

      {/* ── 22. PREVIEW FINAL REPORT ────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[880px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Preview the Final Report
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            A key functionality for users is the ability to preview data after completing the
            scenario setup. Once all conditions, filters, and selections are in place, users
            need an easy way to run the scenario and view a preview of the final report—helping
            them validate their inputs, catch errors early, and build confidence in the results
            before sharing or finalizing.
          </p>
        </div>

        {/* Preview report image — wide */}
        <div className="relative mt-8 w-full max-w-[1344px] aspect-[1344/685] rounded-xl overflow-hidden">
          <Image
            src="/images/greenwealth/preview-report.png"
            alt="Preview report interface"
            fill
            className="object-cover"
            sizes="(max-width: 1344px) 100vw, 1344px"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
