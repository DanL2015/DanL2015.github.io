'use client'
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Caret() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    var bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function caretClick() {
    if (scroll) {
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, document.body.scrollHeight)
    }
  }

  return (
    <div className="animate-bounce cursor-pointer fixed flex justify-center items-center bottom-10 right-10 p-3 border-solid border-b3 dark:border-b2 bg-b4 dark:bg-b1 rounded border-2" onClick={caretClick}>
      <FaChevronUp className={scroll ? "text-b1 dark:text-b4 text-sm h-4 w-4" : "hidden"} />
      <FaChevronDown className={scroll ? "hidden" : "text-b1 dark:text-b4 text-sm h-4 w-4"} />
    </div>
  );
}

export default Caret;
