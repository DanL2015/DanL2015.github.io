import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Card({ post }) {
  var words = post.title.split(" ");
  return (
    <Link href={`/pages/${post.id}`}>
      <div className="section-outline flex-row justify-between items-center">
        <div className="flex flex-col flex-1">
          <div className="flex-container flex-row md:justify-start items-center">
            <div className="flex-container">
              <h2 className="text-b3">{words[0]}&nbsp;</h2>
              <h2>{words.slice(1).join(" ")}</h2>
            </div>
            <div className="flex-container hidden md:flex">
              {post.tags &&
                post.tags.map((tag, index) => {
                  return (
                    <div key={index} className="tag-container">
                      {tag}
                    </div>
                  );
                })}
            </div>
            <div className="flex-1"></div>
            <div className="text-b3 text-lg hidden md:flex justify-self-end">{post.date}</div>
          </div>
          <div className="text-b4 text-sm md:text-lg">{post.description}</div>
        </div>
        <FaChevronRight className="text-b4 flex md:hidden w-8 h-8"></FaChevronRight>
      </div>
    </Link>
  );
}
