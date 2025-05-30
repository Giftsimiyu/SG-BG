import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2E7DD]">
      <Navbar />
      <Hero />
      <main className="flex-grow flex items-center justify-center"></main>

      <Footer />
    </div>
  );
}
