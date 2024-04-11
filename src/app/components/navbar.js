"use client";
import { FaLightbulb } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar({ curPage }) {
  const pathName = usePathname();
  return (
    <main className="mx-10 my-8 flex flex-row justify-between items-center">
      <Link href="/">
        <div className="flex-container">
          <div className="text-b5 text-2xl font-['Rubik'] font-bold">d</div>
          <div className="text-blue text-2xl font-['Rubik'] font-bold">.</div>
          <div className="text-b4 text-2xl font-['Rubik'] font-bold">liu</div>
        </div>
      </Link>
      <div className="flex-container">
        <Link
          href="/"
          className={
            "text-2xl font-['Dosis'] hover:text-lightblue mx-2 " +
            (pathName === "/" ? "text-blue" : "text-b4")
          }
        >
          home
        </Link>
        <div className="text-xl text-b2 font-['Dosis'] mx-2">{"//"}</div>
        <Link
          href="/projects"
          className={
            "text-2xl font-['Dosis'] hover:text-lightblue mx-2 " +
            (pathName === "/projects" ? "text-blue" : "text-b4")
          }
        >
          projects
        </Link>
        <div className="text-xl text-b2 font-['Dosis'] mx-2">{"//"}</div>
        <Link
          href="/blog"
          className={
            "text-2xl font-['Dosis'] hover:text-lightblue mx-2 " +
            (pathName === "/blog" ? "text-blue" : "text-b4")
          }
        >
          blog
        </Link>
        <div
          className="cursor-pointer text-2xl mx-2 p-2 rounded text-b4 hover:text-b0 hover:bg-b4"
          onClick={() => {
            setTheme(theme === "Light" ? "Dark" : "Light");
          }}
        >
          <FaLightbulb className="theme-icon" />
        </div>
      </div>
      <div
        className="hamburger hidden"
        onClick={() => {
          setHam(!ham);
        }}
      >
        <IoMdMenu className="hamburger-icon"></IoMdMenu>
      </div>
    </main>
  );
}

export default Navbar;
