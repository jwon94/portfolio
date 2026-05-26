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

export default function PuffinPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <BackButton />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="px-12 pt-[180px] pb-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
            2021 January - 2023 December / Product Designer
          </p>
          <h1 className="text-[28px] font-normal text-black leading-[36px]">
            Making Trip Planning Experience More Exciting
          </h1>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            This was a side project I worked on with friends throughout 2021~2023. As one of
            three designers collaborating with three developers, we dedicated our evenings and
            weekends to build Puffin.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[4008/1956] rounded-xl overflow-hidden">
          <Image
            src="/images/puffin/hero.png"
            alt="Puffin trip planning app"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
            priority
          />
        </div>
      </section>

      {/* ── 2. THE BURDEN ───────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            The Burden of Being the Head Trip Planner
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Head Trip Planer is the go-to trip organizer who seamlessly coordinates locations,
            schedules, and directions into one thoughtful itinerary that reflects everyone&apos;s
            interests. Head Trip Planner spends over 8 hours planning trips—endlessly gathering
            information from travel blogs, Reddit, social media, and more.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/580] rounded-xl overflow-hidden">
          <Image
            src="/images/puffin/burden.png"
            alt="Head trip planner burden diagram"
            fill
            className="object-contain"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 3. INTRODUCING PUFFIN ───────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-3 max-w-[900px]">
          <h2 className="text-[28px] font-normal text-black leading-[36px]">
            Introducing Puffin: A Collaborative Trip Planning Platform
          </h2>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            We created Puffin—an all-in-one platform that makes it easy for people to
            collaborate and organize their trips. Puffin streamlines the entire travel planning
            experience, from discovering destinations to building shared itineraries, all in
            one place.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/579] rounded-xl overflow-hidden">
          <Image
            src="/images/puffin/intro.png"
            alt="Puffin platform overview"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 4. DESIGN SOLUTION MARKER ───────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-4 max-w-[900px]">
          <h2 className="text-[40px] font-normal text-black leading-[48px]">Design Solution</h2>
        </div>
      </section>

      {/* ── 5. EMPOWERING PLANNERS ──────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Empowering Planners to Stay Organized and Flexible
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              With an intuitive drag-and-drop interface, building and customizing trip itinerary
              is effortless. Planners can add places directly to the plan, rearrange schedules
              with ease, and visualize the journey—all while staying organized from start to
              finish.
            </p>
          </div>

          {/* Wide itinerary image */}
          <div className="relative mt-8 w-full aspect-[1344/621] rounded-xl overflow-hidden">
            <Image
              src="/images/puffin/itinerary.png"
              alt="Drag-and-drop itinerary builder"
              fill
              className="object-cover"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>

          {/* Two-column detail shots */}
          <div className="mt-6 flex gap-6 w-full">
            <div className="relative flex-1 aspect-[682/552] rounded-xl overflow-hidden">
              <Image
                src="/images/puffin/planner-left.png"
                alt="Planner detail — left panel"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative flex-1 aspect-[682/552] rounded-xl overflow-hidden">
              <Image
                src="/images/puffin/planner-right.png"
                alt="Planner detail — right panel"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PERSONALIZED RECOMMENDATIONS ────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Smarter Exploration with Personalized Recommendations
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              Planners often know their main destination but spend hours searching for nearby
              places to explore. Our Recommendations feature simplifies that process by
              suggesting relevant, personalized stops—making it easy to discover and add
              meaningful experiences to any itinerary.
            </p>
          </div>

          <div className="relative mt-8 w-full aspect-[1344/609] rounded-xl overflow-hidden">
            <Image
              src="/images/puffin/recommendations.png"
              alt="Personalized recommendations feature"
              fill
              className="object-cover"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>
        </div>
      </section>

      {/* ── 7. MOBILE EXPERIENCE ────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Prioritizing Mobile to Drive Engagement
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              After our initial beta launch, analytics from Amplitude and FullStory revealed
              that nearly 50% of users were exploring our product on mobile. To avoid losing
              engagement, we quickly pivoted to prioritize the mobile experience. Following the
              launch, we saw a 20% increase in signups, confirming the impact of meeting users
              where they are.
            </p>
          </div>

          <div className="relative mt-8 w-full aspect-[1344/700] rounded-xl overflow-hidden">
            <Image
              src="/images/puffin/mobile.png"
              alt="Puffin mobile experience"
              fill
              className="object-cover"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>
        </div>
      </section>

      {/* ── 8. AI TRIP PLANNING ─────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Bringing AI to Trip Planning with Puffin
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              In early 2023, AI began reshaping the trip planning experience—transforming an
              overwhelming task into a smarter, more collaborative process. With Puffin, we
              introduced a mobile solution that lets planners chat with an AI assistant, easily
              gather group input, and build personalized, shareable itineraries—all in one place.
            </p>
          </div>

          <div className="relative mt-8 w-full aspect-[1344/700] rounded-xl overflow-hidden">
            <Image
              src="/images/puffin/ai-planning.png"
              alt="AI-powered trip planning"
              fill
              className="object-cover"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>
        </div>
      </section>

      {/* ── 9. PRODUCT HUNT ─────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-3 max-w-[900px]">
            <h2 className="text-[28px] font-normal text-black leading-[36px]">
              Early Traction Through Product Hunt
            </h2>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              After multiple design iterations and the launch of our MVP, we were ready to share
              Puffin with a broader travel community. We chose to launch on Product Hunt—and it
              paid off. Puffin was featured as a daily product and received over 160 upvotes,
              validating strong interest and early traction.
            </p>
          </div>

          <div className="relative mt-8 w-full aspect-[1344/700] rounded-xl overflow-hidden">
            <Image
              src="/images/puffin/product-hunt.png"
              alt="Puffin on Product Hunt"
              fill
              className="object-cover"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
