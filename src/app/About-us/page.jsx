"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutBlog() {
  return (
    <section className="min-h-screen bg-vanilla text-black font-Poppins px-6 py-20 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-copper font-signature">
          About the Blog
        </h1>
        <p className="text-lg max-w-xl mx-auto mt-4">
          This isn’t just a blog. It’s a safe space for the soft-hearted, the
          faith-curious, the overwhelmed, and the woman coming back to herself.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="space-y-12 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-copper">
            The Vibe Around Here
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>💌 Real talk devotionals that meet you where you are</li>
            <li>
              📖 Bible study content that feels inspiring, not intimidating
            </li>
            <li>
              🎀 Pretty resources for prayer journaling and spiritual wellness
            </li>
            <li>🕯 Soft wisdom, rooted in the Word</li>
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg leading-relaxed"
        >
          This blog is here to remind you that you’re not too late, not too
          much, and never alone. I hope you leave every post feeling lighter,
          softer, and closer to the God who made you.
        </motion.p>
      </div>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="italic border-l-4 border-copper pl-6 text-copper text-xl max-w-3xl mx-auto mt-20"
      >
        “There’s something sacred about the softest parts of you — let God use
        them.”
      </motion.blockquote>

      {/* CTA */}
      {/* Back to Home (with floating animation) */}
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
          href="/home"
          className="inline-block px-8 py-3 bg-copper text-white rounded-full text-sm hover:bg-copper/90 transition"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
