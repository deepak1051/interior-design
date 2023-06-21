import './feed.css';

const Feed = ({ title, desc, url }) => {
  return (
    <div className="container feed">
      <div className="feed_content">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className="feed_img-container">
        <img src={url} alt="luxury interior design service" />
      </div>
    </div>
  );
};

export default Feed;
