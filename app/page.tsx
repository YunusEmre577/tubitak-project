"use client"
import Footer from "@/components/general/Footer";
import Header from "@/components/general/Header";
import Bottom from "@/components/general/home/Bottom";
import Features from "@/components/general/home/Features";
import FooterSection from "@/components/general/home/FooterSection";
import HeroSection from "@/components/general/home/HeroSection";
import Math from "@/components/general/home/Math";
import Middle from "@/components/general/home/Middle";
import Questions from "@/components/general/home/Questions";
import Section from "@/components/general/home/Section";
import { cn } from "@/components/libs/utils";
import { BluredPage } from "@/components/ui/BluredPage";

export default function Home() {
  return (
    <>
    <main>
      <Header />
      <BluredPage />
      <div className={cn("absolute top-0 rotate z-[-1] h-screen w-full","[background-size:100px_100px]",
          "[background-image:linear-gradient(to_right,#080808,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)]",)}></div>
      <section className="flex flex-col gap-36 mb-12">
        <HeroSection />
        <div className="mt-16"><Section /></div>
        <Middle/>
        <Features />
        <Bottom />
        <Questions />
        <Math />
        <FooterSection />
      </section>
      <Footer />
    </main>
    </>
  );
}
