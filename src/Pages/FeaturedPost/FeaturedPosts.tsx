import { HiOutlineChevronRight } from "react-icons/hi";
import {
  Featured1,
  Featured2,
  Featured3,
  TimeIcon,
  CommentIcon,
} from "../../icons/icons";
import "./FeaturedPost.css";

const posts = [
  {
    id: 1,
    image: Featured1,
    title: "Loudest à la Madison #1 (L'intégral)",
    date: "22 April 2021",
    comments: 10,
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    id: 2,
    image: Featured2,
    title: "Loudest à la Madison #1 (L'intégral)",
    date: "22 April 2021",
    comments: 10,
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    id: 3,
    image: Featured3,
    title: "Loudest à la Madison #1 (L'intégral)",
    date: "22 April 2021",
    comments: 10,
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
];

function FeaturedPosts() {
  // This component renders a list of featured posts with images, titles, descriptions, and metadata.
  return (
    <div className="featured-posts-container">
      <p className="subtitle">Practice Advice</p>
      <h2 className="titles">Featured Posts</h2>
      <h2 className="titles-mobile">Featured Products</h2>

      <div className="posts-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="image-wrapper">
              <post.image className="post-image" />
              <div className="new-badge">NEW</div>
            </div>
            <div className="post-content">
              <p className="tags">
                <span className="tag-highlight">Google</span> &nbsp; Trending
                &nbsp; New
              </p>
              <h4 className="post-title">{post.title}</h4>
              <p className="descriptions">{post.description}</p>
              <div className="meta">
                <span>
                  <TimeIcon /> {post.date}
                </span>
                <span>
                  <CommentIcon /> {post.comments} comments
                </span>
              </div>
              <a href="#" className="learn-more">
                Learn More <HiOutlineChevronRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedPosts;
