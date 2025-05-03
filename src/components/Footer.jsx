{
  /*import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer  bg-blush text-black p-10">
      <div className="footer grid grid-cols-2 gap-4 md:grid grid-flow-col gap-4 justify-between items-center">
        <Image
          src="/logo2.svg"
          alt="Logo"
          width={300}
          height={300}
          className="w-100 l-100 ml-auto lg:w-300 h-300 "
        />
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Request a Blog Post Topic</a>
          <a className="link link-hover">Work with me</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Terms of Use</a>
        </nav>
        <form>
          <h6 className="footer-title">Join the SGBG Movement</h6>
          <p>
            Be a part of us and receive exclusive updates, personalised
            devotionals and more!
          </p>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item bg-copper hover:bg-mint text-black ">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
}*/
}
import Image from "next/image";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

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
          <h6 className="footer-title mb-4">Quick Links</h6>
          <a className="link link-hover mb-2 ml-2">Request a Blog Post Topic</a>
          <a className="link link-hover mb-2 ml-4">Work with me</a>
          <a className="link link-hover mb-2 ml-6">FAQ</a>
          <a className="link link-hover ml-8">Terms of Use</a>
        </nav>

        {/* Newsletter Signup */}
        <form className="flex flex-col justify-start items-center md:items-start px-4 mt-4 md:mt-0 text-center md:text-left">
          <h6 className="footer-title mb-2">Join the SGBG Movement</h6>
          <p className="mb-3 max-w-md">
            Be a part of us and receive exclusive updates, personalised
            devotionals and more!
          </p>
          <fieldset className="w-full max-w-sm">
            <label className="block mb-1 text-sm">
              Enter your email address
            </label>
            <div className="join w-full">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered join-item w-full"
              />
              <button className="btn btn-primary join-item bg-copper hover:bg-mint text-black">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
}
