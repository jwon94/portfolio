import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PixelGame from "@/components/PixelGame";
import styles from "@/components/PixelGame.module.css";

export default function ViewCodePage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      <section className="px-12 pt-[180px] pb-24">
        <div className="flex flex-col gap-3 max-w-[900px] mb-16">
          <h1 className="text-[28px] leading-[36px] lg:text-[40px] font-normal text-black lg:leading-[48px]">
            Vibe Code
          </h1>
          <p className="text-[18px] font-normal text-black leading-[28px]">
            I love experimenting with new tools and finding ways to weave AI into my creative process. This is my playground, small design side projects I built with Claude Code just to see what&apos;s possible.
          </p>
        </div>

        <div className="flex flex-col gap-20 max-w-[1200px]">
          {/* Career runner game */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-[22px] leading-[30px] lg:text-[32px] font-normal text-black lg:leading-[40px]">
                Career runner
              </h2>
              <p className="text-[16px] text-black leading-[24px]">
                I mapped my entire career as a pixel art game. Walk through each chapter, from design school to leading product work at Intuit TurboTax, and collect hearts along the way. I wanted to build something that felt fun and engaging, because resumes don&apos;t have to be boring. Use ← → to walk, SPACE to jump, double tap SPACE to double jump.
              </p>
            </div>
            <div className={styles.gameFrame}>
              <PixelGame />
            </div>
          </div>

          {/* Video project */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-[22px] leading-[30px] lg:text-[32px] font-normal text-black lg:leading-[40px]">
                Eyeball roller
              </h2>
              <p className="text-[16px] text-black leading-[24px]">
                An eyeball-rolling prototype built with VS Code and the Claude Code plugin. The illustrations and text are hand-drawn by me, pulled straight from my sketchbook. I wanted to build something fun and meaningless.
              </p>
            </div>
            <video
              src="/videos/vibecoding.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-[12px] overflow-hidden"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
