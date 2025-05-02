import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-blush text-black p-10">
      <div className="footer grid grid-flow-col gap-4 justify-between items-center">
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
}
