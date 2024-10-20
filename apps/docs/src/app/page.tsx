import { Hero } from "@/app/_components/Hero";
import { Features } from "@/app/_components/Features";
import { Benefits } from "./_components/Benefits";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">

      <main className="flex-grow flex flex-col items-center justify-center p-3 lg:p-8">
        <Hero />
        <Benefits />
        <Features />
      </main>

    </div>
  );
}
