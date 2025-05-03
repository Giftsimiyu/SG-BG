import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2E7DD]">
      <Navbar />

      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Welcome to My Blog!</h1>
      </main>
      <Footer />
    </div>
  );
}
