import CardGradient from "@/components/CardGradient/CardGradient";
import ListGradient from "@/components/ListGradient/ListGradient";
import Image from "next/image";
import styles2 from "@/components/ListGradient/gradient.module.css";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-row items-center justify-evenly p-24 relative"
      style={{
        backgroundImage: "url('/neon_bubbles_2.jpg')",
        backgroundSize: "cover", // Cover the entire page
        backgroundPosition: "center", // Center the background image
      }}
    >
      <div
        className={`absolute w-full h-full rounded-2xl overflow-hidden ${styles2.gradientBlur}`}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div
        className="w-96 h-[484px] rounded-2xl shadow-xl relative flex justify-center subpixel-antialiased z-50 hover:scale-150 transition-all  duration-500"
        style={{
          backgroundImage: "url('https://picsum.photos/800/800')",
          backgroundSize: "cover", // Cover the entire page
          backgroundPosition: "center", // Center the background image
          // zIndex: -1, // Behind the content
        }}
      >
        <h1 className="absolute -bottom-12 font-semibold text-[26px] tracking-[-1px text-balance"></h1>
      </div>
      <div
        className="w-96 h-[484px] rounded-2xl shadow-xl  relative flex justify-center subpixel-antialiased z-20 hover:scale-150 transition-all  duration-500"
        style={{
          backgroundImage: "url('https://picsum.photos/800/800')",
          backgroundSize: "cover", // Cover the entire page
          backgroundPosition: "center", // Center the background image
        }}
      >
        <h1 className="absolute -bottom-10 z-20 font-semibold text-[26px] tracking-[-1px text-balance text-white">
          Normal blur
        </h1>
        <div className="w-full h-full backdrop-blur-[32px] rounded-2xl "></div>
      </div>

      <CardGradient />
    </main>
  );
}
