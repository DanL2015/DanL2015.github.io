import Navbar from "./Navbar";
import Right from "./Right";
import json from "./Posts.json";
import Post from "./Post";
import useLocalStorageState from "use-local-storage-state";

function Blog() {
  const [theme, setTheme] = useLocalStorageState("theme", "Dark");
  let posts = JSON.parse(JSON.stringify(json));
  return (
    <div className="background" data-theme={theme}>
      <Navbar curPage="Blog" />
      <div className="h-container">
        <div className="l-container">
          <div className="section">
            <h1>Blog</h1>
            <hr></hr>
          </div>
          {posts.blogs &&
            posts.blogs.map((post, index) => (
              <Post
                title={post.title}
                date={post.date}
                paragraphs={post.paragraphs}
              ></Post>
            ))}
        </div>
        <Right></Right>
      </div>
    </div>
  );
}

export default Blog;
