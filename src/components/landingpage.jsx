import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/landing page.png"
        alt="Beach with seashells"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#F2E7DD]/60 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-playfair text-[#292421] mb-6">
          Small Girl, Big God
        </h1>
        <Link
          href="/home"
          className="bg-[#CA8E82] text-white px-6 py-3 rounded-2xl text-lg font-nunito hover:bg-[#A75F37] transition duration-300"
        >
          Enter Site
        </Link>
      </div>
    </div>
  );
}
