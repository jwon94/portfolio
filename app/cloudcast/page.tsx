import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const SHAPES = {
  flower: {
    path: "M66.5346 133.069C56.0927 133.069 47.5047 125.131 46.4759 114.961C38.5567 121.425 26.8711 120.965 19.4875 113.582C12.104 106.198 11.6443 94.5126 18.1086 86.5934C7.93791 85.5646 -4.56433e-07 76.9766 0 66.5346C8.26446e-07 56.0927 7.93793 47.5047 18.1086 46.4759C11.6443 38.5567 12.104 26.8711 19.4876 19.4875C26.8711 12.104 38.5567 11.6443 46.4759 18.1086C47.5047 7.9379 56.0927 8.26444e-07 66.5346 0C76.9766 -4.56432e-07 85.5646 7.93791 86.5934 18.1086C94.5126 11.6443 106.198 12.1039 113.582 19.4875C120.965 26.8711 121.425 38.5567 114.961 46.4759C125.131 47.5047 133.069 56.0927 133.069 66.5346C133.069 76.9766 125.131 85.5646 114.961 86.5934C121.425 94.5126 120.965 106.198 113.582 113.582C106.198 120.965 94.5126 121.425 86.5934 114.961C85.5646 125.131 76.9766 133.069 66.5346 133.069Z",
    viewBox: "0 0 134 134", fill: "#FE8F00",
  },
  doubleflower: {
    path: "M63.1837 9.18367C63.1837 4.11167 59.072 0 54 0C48.928 0 44.8163 4.11167 44.8163 9.18367V19.2513L39.8422 10.4983C37.3363 6.08855 31.7301 4.5452 27.3204 7.05111C22.9106 9.55703 21.3673 15.1633 23.8732 19.573L29.5334 29.5334L19.573 23.8732C15.1633 21.3673 9.55704 22.9106 7.05112 27.3204C4.54521 31.7301 6.08856 37.3363 10.4983 39.8422L19.2514 44.8163H9.18367C4.11167 44.8163 0 48.928 0 54C0 59.072 4.11167 63.1837 9.18367 63.1837H19.2513L10.4983 68.1578C6.08856 70.6637 4.54522 76.2699 7.05113 80.6796C9.55704 85.0893 15.1633 86.6327 19.573 84.1268L29.5335 78.4665L23.8732 88.427C21.3673 92.8367 22.9106 98.443 27.3204 100.949C31.7301 103.455 37.3363 101.911 39.8422 97.5017L44.8163 88.7486V98.8163C44.8163 103.888 48.928 108 54 108C59.072 108 63.1837 103.888 63.1837 98.8163V88.7487L68.1578 97.5017C70.6637 101.911 76.2699 103.455 80.6796 100.949C85.0894 98.443 86.6327 92.8367 84.1268 88.427L78.4665 78.4665L88.427 84.1268C92.8367 86.6327 98.443 85.0893 100.949 80.6796C103.455 76.2699 101.911 70.6637 97.5017 68.1578L88.7487 63.1837H98.8163C103.888 63.1837 108 59.072 108 54C108 48.928 103.888 44.8163 98.8163 44.8163H88.7486L97.5017 39.8422C101.911 37.3363 103.455 31.7301 100.949 27.3204C98.443 22.9106 92.8367 21.3673 88.427 23.8732L78.4665 29.5334L84.1268 19.573C86.6327 15.1633 85.0894 9.55703 80.6796 7.05111C76.2699 4.5452 70.6637 6.08855 68.1578 10.4983L63.1837 19.2513V9.18367Z",
    viewBox: "0 0 108 108", fill: "#BDBCFA",
  },
  oval: {
    path: "M91.7781 43.4615C104.383 38.8983 112.414 32.0027 112.379 24.3201C112.318 10.7487 87.111 -0.139129 56.0783 0.00140305C25.0456 0.141935 -0.0615064 11.2576 -4.81224e-05 24.829C0.0347427 32.5116 8.12753 39.3342 20.7736 43.7831C8.16834 48.3463 0.137678 55.242 0.172469 62.9246C0.233927 76.4959 25.4407 87.3838 56.4734 87.2432C87.5061 87.1027 112.613 75.987 112.552 62.4157C112.517 54.7331 104.424 47.9104 91.7781 43.4615Z",
    viewBox: "0 0 113 88", fill: "#9C8902",
  },
  cloud: {
    path: "M137.86 69.2941C136.163 69.2941 134.514 69.0868 132.935 68.6958C130.732 78.0083 122.513 84.9261 112.711 84.9261C107.698 84.9261 103.098 83.1163 99.5062 80.1021C97.2307 89.3098 89.0613 96.1251 79.3321 96.1251C69.743 96.1251 61.6691 89.5046 59.26 80.4983C55.6532 83.5642 51.0142 85.4084 45.9532 85.4084C36.1512 85.4084 27.9324 78.4906 25.729 69.1781C24.1503 69.5692 22.5012 69.7764 20.8046 69.7764C9.31453 69.7764 -4.72188e-05 60.2707 -4.67062e-05 48.5449C-4.66992e-05 48.3837 0.00172865 48.2229 0.00522876 48.0626C0.00172867 47.9022 -4.66711e-05 47.7414 -4.66641e-05 47.5802C-4.61515e-05 35.8544 9.31454 26.3487 20.8047 26.3487C22.5012 26.3487 24.1503 26.5559 25.729 26.947C27.9324 17.6345 36.1512 10.7167 45.9532 10.7167C51.0142 10.7167 55.6532 12.5609 59.26 15.6268C61.6691 6.62049 69.743 -3.88687e-06 79.3321 -3.46772e-06C89.0613 -3.04244e-06 97.2307 6.81535 99.5062 16.023C103.098 13.0088 107.698 11.199 112.711 11.199C122.513 11.199 130.732 18.1168 132.935 27.4293C134.514 27.0383 136.163 26.831 137.86 26.831C149.35 26.831 158.664 36.3367 158.664 48.0626C158.664 59.7884 149.35 69.2941 137.86 69.2941Z",
    viewBox: "0 0 159 97", fill: "#E2E2E2",
  },
} as const;

function Shape({ name, size = 48, rotate = 0 }: { name: keyof typeof SHAPES; size?: number; rotate?: number }) {
  const s = SHAPES[name];
  const [vw, vh] = s.viewBox.split(" ").slice(2).map(Number);
  const h = Math.round(size * (vh / vw));
  return (
    <svg width={size} height={h} viewBox={s.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined, flexShrink: 0 }}>
      <path d={s.path} fill={s.fill} />
    </svg>
  );
}

export default function CloudcastPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <BackButton />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="px-12 pt-[180px] pb-12">
        <div className="flex flex-col gap-2 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">
            2023 July - 2023 December / Senior Designer
          </p>
          <h1 className="text-[28px] leading-[36px] lg:text-[40px] font-normal text-black lg:leading-[48px]">
            Designing an immersive video learning experience for engineers
          </h1>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Designed and launched the full MVP for beta testing with in-house 1k+ developers,
            helping secure funding through design concepts and product vision.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[3097/1814] rounded-xl overflow-hidden">
          <Image
            src="/images/cloudcast/awslanding.png"
            alt="AWS TV hero"
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
            priority
          />
        </div>
      </section>

      {/* ── 2. PROBLEM ──────────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-2 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">Problem</p>
          <h3 className="text-[20px] leading-[28px] lg:text-[28px] font-normal text-black lg:leading-[36px]">
            Cloud engineers face friction in finding the right resources
          </h3>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            Cloud engineers often struggle to find precise learning resources, frequently
            switching between four different tools and manually filtering out irrelevant
            content. On average, they lose 3–4 hours each week just trying to locate the
            right materials.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/618] rounded-xl overflow-hidden">
          <Image
            src="/images/cloudcast/problem-v2.png"
            alt="Problem — fragmented learning tools"
            fill
            className="object-contain"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 3. OBJECTIVE ────────────────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-2 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">Objective</p>
          <h3 className="text-[20px] leading-[28px] lg:text-[28px] font-normal text-black lg:leading-[36px]">
            Create a single platform for fast, efficient content discovery by technologists
          </h3>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            The vision for AWS TV is a streaming platform for cloud engineers,
            centralizing technical content to simplify learning and boost productivity.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/388] rounded-xl overflow-hidden">
          <Image
            src="/images/cloudcast/objective-v2.png"
            alt="Before and after AWSTV"
            fill
            className="object-contain"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </section>

      {/* ── 4. BUSINESS OPPORTUNITY ─────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="flex flex-col gap-2 max-w-[900px]">
          <p className="text-[18px] font-normal text-[#a1a1a1] leading-[28px]">Business Opportunity</p>
          <h3 className="text-[20px] leading-[28px] lg:text-[28px] font-normal text-black lg:leading-[36px]">
            Driving product adoption through data, ecosystem ownership, and strategic content
          </h3>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            By owning first-party viewership data, AWS TV can track user behavior,
            optimize content, and drive smarter, more personalized learning, boosting adoption
            and product education.
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[1100px] aspect-[1100/428] rounded-xl overflow-hidden">
          <Image
            src="/images/cloudcast/business-v2.png"
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
          <h2 className="text-[22px] leading-[30px] lg:text-[32px] font-normal text-black lg:leading-[40px]">Design Solution</h2>
        </div>
      </section>

      {/* ── 6. LANDING EXPERIENCE ───────────────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="relative w-full aspect-[15423/6963] rounded-xl overflow-hidden">
            <Image
              src="/images/cloudcast/videolistpage.jpg"
              alt="AWS video list page"
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
          <div className="flex flex-col gap-2 max-w-[900px]">
            <h3 className="text-[20px] leading-[28px] lg:text-[28px] font-normal text-black lg:leading-[36px]">
              Quick content preview for effortless discovery
            </h3>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              Technologists need quick, frictionless access to relevant content. The landing
              page surfaces personalized, trending videos with interactive previews, helping
              users quickly assess and jump to what matters—no deep dive needed.
            </p>
          </div>

          <img
            src="/images/cloudcast/preview-v2.png"
            alt="Quick content preview interface"
            className="mt-8 w-full h-auto rounded-xl"
          />
        </div>
      </section>

      {/* ── 10. SEAMLESS VIEWING EXPERIENCE ─────────────────────── */}
      <section className="px-12 py-12">
        <div className="w-full max-w-[1344px]">
          <div className="flex flex-col gap-2 max-w-[900px]">
            <h3 className="text-[20px] leading-[28px] lg:text-[28px] font-normal text-black lg:leading-[36px]">
              Designing for seamless viewing experience
            </h3>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              AWS TV offers an intuitive experience that helps users easily find content
              aligned with their learning goals, ensuring seamless, focused viewing from start
              to finish.
            </p>
          </div>

          {/* Main wide image */}
          <div className="relative mt-8 w-full aspect-[1344/895] rounded-xl overflow-hidden">
            <Image
              src="/images/cloudcast/viewing-main-v2.png"
              alt="AWS TV seamless viewing"
              fill
              className="object-cover"
              sizes="(max-width: 1344px) 100vw, 1344px"
            />
          </div>

          {/* 2-col row 1 */}
          <div className="mt-6 flex gap-6 w-full">
            <div className="relative flex-1 aspect-[682/552] rounded-xl overflow-hidden">
              <Image
                src="/images/cloudcast/viewing-1-v2.png"
                alt="Transcript panel"
                fill
                className="object-contain"
                sizes="50vw"
              />
            </div>
            <div className="relative flex-1 aspect-[682/552] rounded-xl overflow-hidden">
              <Image
                src="/images/cloudcast/viewing-2-v2.png"
                alt="Full video player"
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
                src="/images/cloudcast/viewing-3-v2.png"
                alt="Quality settings"
                fill
                className="object-contain"
                sizes="50vw"
              />
            </div>
            <div className="relative flex-1 aspect-[682/552] rounded-xl overflow-hidden">
              <Image
                src="/images/cloudcast/viewing-4-v2.png"
                alt="Mobile video player"
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
          <div className="flex flex-col gap-2 max-w-[900px]">
            <h3 className="text-[20px] leading-[28px] lg:text-[28px] font-normal text-black lg:leading-[36px]">
              Designing with multitasking users in mind through responsive design.
            </h3>
            <p className="text-[18px] font-normal text-black leading-[28px]">
              AWS is intentionally designed to support how modern technologists learn across
              multiple devices, screens, and contexts. Whether users are multitasking, switching
              between tabs, or viewing content on the go, the responsive design delivers a
              seamless, intuitive experience every time.
            </p>
          </div>

          <div className="relative mt-8 w-full aspect-[10470/3872] rounded-xl overflow-hidden">
            <Image
              src="/images/cloudcast/responsive-new.png"
              alt="Responsive design across devices"
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
