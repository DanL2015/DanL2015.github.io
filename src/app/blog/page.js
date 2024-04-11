import Break from "../components/break";
import Card from "../components/card";
import getPostMetadata from "../utils/getPostMetadata";

export default function Home() {
  const posts = getPostMetadata("./src/app/posts/");
  return (
    <main>
      <div className="content-container">
        <div className="section">
          <div className="flex-container">
            <h1 className="alt">Welcome&nbsp;</h1>
            <h1>to my Blog!</h1>
          </div>
        </div>
        <Break></Break>
        {posts &&
          posts.map((post, index) => {
            return <Card key={index} post={post}></Card>;
          })}
      </div>
    </main>
  );
}
