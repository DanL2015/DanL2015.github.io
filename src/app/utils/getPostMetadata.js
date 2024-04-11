import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const mdPosts = files.filter((file) => file.endsWith(".md"));

  const posts = mdPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
      description: matterResult.data.description,
      id: filename.replace(".md", ""),
    };
  });

  return posts;
}
