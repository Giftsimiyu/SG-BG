import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className=" w-full bg-vanilla flex items-center justify-center py-10 mt-20">
      <div className="flex flex-col lg:flex-row w-11/12 max-w-7xl rounded-lg overflow-hidden shadow-lg">
        <div className="w-full lg:w-3/4 relative h-64 lg:h-auto">
          <Image
            src="/blog banner.svg"
            alt="hero image"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        {/*overlay or frame indicator*/}
        <div className="absolute left-0 top-0 h-full w-4 bg-vanilla hidden lg:block">
          {/*frame effect */}
        </div>
        <div className="w-full lg:w-1/4 bg-vanilla p-6 sm:p-10 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold font-playfair mb-4">
            Hi, I'm Gift
          </h1>
          <p className="text-base sm:text-lg text-black font-lora mb-6">
            Welcome to my blog! Here, I share my thoughts on christianity, faith
            and how to grow as young christian girl.
          </p>
          <div className="flex justify-center lg:justify-center">
            <Link href="/about-me">
              <button className="mt-4 px-6 py-3 bg-blush text-black font-nunito rounded hover:bg-pink transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
