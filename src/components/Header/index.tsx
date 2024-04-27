import Link from "next/link";
import Logo from "./Logo";
import { DribbbleIcon, GithubIcon, LinkedinIcon, SunIcon, TwitterIcon } from "../Icons";

const Header = () => {
  return (
    <>
      <header className="w-full p-4 px-10 flex items-center justify-between">
        <Logo />
        <nav className="w-max py-3 px-8 border border-solid border-black rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-white/80 backdrop-blur-sm">
          <Link href={"/"} className="mr-2">
            Home
          </Link>
          <Link href={"/about"} className="mr-2">
            About
          </Link>
          <Link href={"/contact"} className="mr-2">
            Contact
          </Link>
          <button><SunIcon className={""} /></button>
        </nav>
        <div>
          <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
            <LinkedinIcon className="hover:scale-125 transition-all ease-in-out duration-200" />
          </a>
          <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
            <TwitterIcon className="hover:scale-125 transition-all ease-in-out duration-200" />
          </a>
          <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
            <GithubIcon className="hover:scale-125 transition-all ease-in-out duration-200" />
          </a>
          <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
            <DribbbleIcon className="hover:scale-125 transition-all ease-in-out duration-200" />
          </a>
        </div>
      </header>
    </>
  );
};
export default Header;
