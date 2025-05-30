"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-vanilla font-Poppins text-black">
      <div className="bg-copper/10 py-16 px-6 text-center mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-copper font-signature"
        >
          Get in Touch
        </motion.h1>
        <p className="text-lg max-w-xl mx-auto mt-2">
          I’d love to hear from you! Whether you have a question, prayer
          request, or a collab idea — my inbox is open.
        </p>
      </div>

      {/* Form & Contact Info */}
      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-copper">Let’s Connect</h2>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-copper mt-1" />
            <p>
              Based in Nairobi, Kenya — happily creating from my cozy desk 💻
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-copper mt-1" />
            <p>
              hello@yourblog.com <br /> support@yourblog.com
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-copper mt-1" />
            <p>+254 712 345678</p>
          </div>

          <div className="pt-4">
            <p className="font-medium">Follow our socials:</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 hover:text-copper transition" />
              </a>
              <a href="#" aria-label="Pinterest">
                <FaPinterest className="w-5 h-5 hover:text-copper transition" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="w-5 h-5 hover:text-copper transition" />
              </a>
              <a href="#" aria-label="Email">
                <FaEnvelope className="w-5 h-5 hover:text-copper transition" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-copper"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-copper"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-copper"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-copper"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-copper text-white font-semibold py-3 rounded-lg hover:bg-copper/80 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Optional Newsletter CTA */}
      <div className="bg-vanilla py-16 text-center px-6">
        <h2 className="text-2xl font-semibold mb-2 text-copper">
          Join My Monthly Letters
        </h2>
        <p className="mb-4">
          Encouragement, favorite scriptures, and cozy updates — straight to
          your inbox.
        </p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-copper"
          />
          <button
            type="submit"
            className="px-10 py-3 bg-copper text-white rounded-md hover:bg-copper/90"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Back to Home */}
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
          href="/"
          className="inline-block px-8 py-3 bg-copper text-white rounded-full text-sm hover:bg-copper/90 transition"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
