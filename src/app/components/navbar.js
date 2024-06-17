"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ curPage }) {
  const [menu, setMenu] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY == 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    });
  }, []);

  return (
    <main className="fixed top-0 z-10 flex flex-col items-center w-full">
      <motion.div layout className={`${atTop ? "w-full" : "w-3/4"}`}>
        <div className="px-10 py-8 flex flex-row bg-b5/40 dark:bg-b1/40 justify-between items-center backdrop-filter backdrop-blur-lg rounded-xl m-4">
          <Link href="/">
            <div className="flex-container">
              <div className="dark:text-b5 text-b0 text-2xl font-['Rubik'] font-bold">
                d
              </div>
              <div className="text-blue-light dark:text-blue text-2xl font-['Rubik'] font-bold">
                .
              </div>
              <div className="dark:text-b4 text-b1 text-2xl font-['Rubik'] font-bold">
                liu
              </div>
            </div>
          </Link>
          <div className="flex-container hidden md:flex">
            <Link
              href="/"
              className={
                "text-2xl font-['Dosis'] hover:dark:text-lightblue hover:text-lightblue-light mx-2 " +
                (pathName === "/"
                  ? "text-blue-light dark:text-blue"
                  : "dark:text-b4 text-b1")
              }
            >
              home
            </Link>
            <div className="text-xl dark:text-b3 text-b2 font-['Dosis'] mx-2">
              {"//"}
            </div>
            <Link
              href="/projects"
              className={
                "text-2xl font-['Dosis'] hover:dark:text-lightblue hover:text-lightblue-light mx-2 " +
                (pathName === "/projects"
                  ? "text-blue-light dark:text-blue"
                  : "dark:text-b4 text-b1")
              }
            >
              projects
            </Link>
            <div className="text-xl dark:text-b3 text-b2 font-['Dosis'] mx-2">
              {"//"}
            </div>
            <Link
              href="/blog"
              className={
                "text-2xl font-['Dosis'] hover:dark:text-lightblue hover:text-lightblue-light mx-2 " +
                (pathName === "/blog"
                  ? "text-blue-light dark:text-blue"
                  : "dark:text-b4 text-b1")
              }
            >
              blog
            </Link>
            <div
              className="cursor-pointer text-2xl mx-2 p-2 rounded text-b1 dark:text-b4 hover:text-b5 dark:hover:text-b0 hover:bg-b1 dark:hover:bg-b4"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              {theme === "light" ? <FiSun /> : <FiMoon />}
            </div>
          </div>
          <div
            className="flex md:hidden cursor-pointer text-2xl mx-2 p-2 rounded text-b4 hover:text-b0 hover:bg-b4"
            onClick={() => {
              console.log(menu);
              setMenu(!menu);
            }}
          >
            <IoMdMenu className="hamburger-icon"></IoMdMenu>
          </div>
        </div>
      </motion.div>
      <motion.div layout className={`${atTop ? "w-full" : "w-3/4"}`}>
        <AnimatePresence>
          {menu && (
            <motion.div
              className="flex flex-col justify-center items-start p-10 backdrop-filter backdrop-blur-lg md:hidden bg-b5/40 dark:bg-b1/40 rounded-xl mx-4"
              layout
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
            >
              <Link
                href="/"
                className={`text-2xl font-['Dosis'] hover:text-lightblue my-1 ${
                  pathName === "/blog" ? "text-blue" : "text-b1"
                })`}
              >
                home
              </Link>
              <Link
                href="/projects"
                className={`text-2xl font-['Dosis'] hover:text-lightblue my-1 ${
                  pathName === "/blog" ? "text-blue" : "text-b1"
                })`}
              >
                projects
              </Link>
              <Link
                href="/blog"
                className={`text-2xl font-['Dosis'] hover:text-lightblue my-1 ${
                  pathName === "/blog" ? "text-blue" : "text-b1"
                })`}
              >
                blog
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}

export default Navbar;
