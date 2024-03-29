import Image from "next/image";
import Hero from "@/components/LandingPage/ui/Hero"; // Import the 'Hero' component
import FeaturedProducts from "@/components/LandingPage/ui/FeaturedProducts";
import HeroNavbar from "@/components/LandingPage/ui/HeroNavbar";
import Collections from "@/components/LandingPage/ui/Collections";

export default function Landing() {
  return (
    <>
      <HeroNavbar />
      <main className="min-h-screen">
        <Hero />
        <section className="flex justify-center pt-10 min-h-screen">
          <FeaturedProducts />
        </section>
        <section className="flex justify-center pt-10 min-h-screen">
          <Collections />
        </section>
      </main>
    </>
  );
}
