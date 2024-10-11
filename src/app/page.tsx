import Header from "@/sections/home/components/Header/Header";
import Hero from "@/sections/home/components/Hero/Hero";
import Showcase from "@/sections/home/components/Instructions";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Showcase />
    </div>
  );
}
