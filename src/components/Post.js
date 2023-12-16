import "../css/Page.css";

function Post({ title, date, paragraphs }) {
  return (
    <div className="section">
      <h1>
        {title} - {date}
      </h1>
      {paragraphs.map((paragraph, i) => (
        <div dangerouslySetInnerHTML={{__html: "<p>" + paragraph + "</p>"}}></div>
      ))}
    </div>
  );
}

export default Post;
