// pages/about.tsx or about.jsx

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="min-h-screen bg-vanilla text-black font-Poppins px-6 py-16 lg:px-32">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-2 mb-12"
      >
        <h1 className="text-4xl font-extrabold text-copper font-signature">
          Small Girl, Big God
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          Hi, I’m Gift — a writer, a friend, an enterpreneur, but above all,
          just a girl that loves God. Welcome to my soft corner of the internet.
        </p>
      </motion.div>

      {/* Image + Intro Block */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/me.svg"
            alt="My portrait"
            width={500}
            height={600}
            className="rounded-xl shadow-xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-copper">
            Meet the Writer
          </h2>
          <p>
            I’m the girl who cries during worship, takes photos of sunsets, and
            journals her heart out at midnight. I believe in starting over,
            showing up, and writing the real stuff — the God stuff.
          </p>
          <p>
            I started this blog for women like you — soft, strong, and still
            figuring it out as a christian. Here, faith meets lifestyle and
            vulnerability is sacred.
          </p>
        </motion.div>
      </div>

      {/* Quote Section */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="italic border-l-4 border-copper pl-6 text-copper text-xl max-w-3xl mx-auto mb-16"
      >
        “God isn’t asking for your perfection — just your permission.”
      </motion.blockquote>

      {/* Fun Facts */}
      <div className="grid md:grid-cols-3 gap-6 text-center mb-20">
        {[
          "I love a good cup of coffee ☕",
          "I love reading the Bible in the morning 🌅",
          "I am a mystery girly 🕵️‍♀️",
          "Pinterest is my vision board 🎀",
          "I rewatch The Chosen like therapy 📖",
        ].map((fact, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="bg-tan rounded-xl p-6 shadow-md"
          >
            {fact}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-12 mb-6"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-copper text-white rounded-full text-sm hover:bg-copper/90 transition"
        >
          Let's Connect
        </Link>
      </motion.div>
    </section>
  );
}
