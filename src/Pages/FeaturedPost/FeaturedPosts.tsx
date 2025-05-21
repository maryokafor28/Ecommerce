import {
  Featured1,
  Featured2,
  Featured3,
  CommentIcon,
  TimeIcon,
} from "../../icons/icons";
import { HiOutlineChevronRight } from "react-icons/hi";

import "./FeaturedPost.css";

const posts = [
  {
    id: 1,
    image: <Featured1 />,
    title: "Loudest à la Madison #1 (L’intégral)",
    date: "22 April 2021",
    comments: 10,
    tags: ["Google", "Trending", "New"],
    excerpt:
      "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
  },
  {
    id: 2,
    image: <Featured2 />,
    title: "Loudest à la Madison #1 (L’intégral)",
    date: "22 April 2021",
    comments: 10,
    tags: ["Google", "Trending", "New"],
    excerpt:
      "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
  },
  {
    id: 3,
    image: <Featured3 />,
    title: "Loudest à la Madison #1 (L’intégral)",
    date: "22 April 2021",
    comments: 10,
    tags: ["Google", "Trending", "New"],
    excerpt:
      "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
  },
];

function FeaturedPosts() {
  return (
    <div className="featured-container">
      <p className="subheading">Practice Advice</p>
      <h2 className="main-heading">Featured Posts</h2>
      <div className="cards">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="image-wrapper">
              {post.image}
              <span className="badge">NEW</span>
            </div>
            <div className="card-content">
              <div className="tags">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`tag ${tag === "Google" ? "google-tag" : ""}`}
                  >
                    {tag}
                    {index < post.tags.length - 1 && "   "}
                  </span>
                ))}
              </div>
              <h4 className="titles">{post.title}</h4>
              <p className="excerpt">{post.excerpt}</p>
              <div className="meta">
                <div className="date">
                  <TimeIcon className="icon" />
                  {post.date}
                </div>
                <div className="comments">
                  <CommentIcon className="icon" />
                  {post.comments} comments
                </div>
              </div>
              <div className="learn-more">
                Learn More <HiOutlineChevronRight className="arrow-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedPosts;
