import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blush text-black p-10">
      <div className="grid md:grid-cols-3 gap-8 md:divide-x divide-gray-300">
        {/* Logo + Socials */}
        <div className="flex flex-col items-center md:items-start px-4">
          <Image
            src="/logo2.svg"
            alt="Logo"
            width={300}
            height={300}
            className="w-24 md:w-48 lg:w-64 h-auto"
          />

          {/* Socials directly under logo */}
          <div className="flex space-x-4 mt-3">
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

        {/* Quick Links - staggered layout */}
        <nav className="flex flex-col justify-start text-center md:text-left px-4 mt-4 md:mt-0">
          <h6 className="footer-title font-playfair mb-4">Quick Links</h6>
          <a className="link link-hover font-nunito mb-2 ml-2">
            Request a Blog Post Topic
          </a>
          <a className="link link-hover font-nunito mb-2 ml-2">Work with me</a>
          <a className="link link-hover font-nunito mb-2 ml-2">FAQ</a>
          <a className="link link-hover font-nunito ml-2">Terms of Use</a>
        </nav>

        {/* Newsletter Signup */}
        <form className="flex flex-col justify-start items-center md:items-start px-4 mt-4 md:mt-0 text-center md:text-left">
          <h6 className="footer-title font-playfair mb-2">
            Join the SGBG Sisterhood{" "}
          </h6>
          <p className="mb-3 max-w-md font-lora">
            Be a part of us and receive exclusive updates, personalised
            devotionals and more!
          </p>
          <fieldset className="w-full max-w-sm">
            <label className="block mb-1 font-lora text-sm">
              Enter your email address
            </label>
            <div className="join w-full">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered join-item w-full"
              />

              <button className="btn btn-primary join-item bg-blush hover:bg-pink text-black">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
}
