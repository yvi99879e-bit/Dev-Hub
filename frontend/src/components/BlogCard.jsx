import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">

      <img
        src={blog.image}
        alt={blog.title}
        className="blog-image"
      />

      <div className="blog-content">

        <span className="blog-category">
          {blog.category}
        </span>

        <h2>{blog.title}</h2>

        <p className="blog-author">
          ✍️ {blog.author}
        </p>

        <p className="blog-desc">
          {blog.content.substring(0,120)}...
        </p>

        <div className="blog-footer">

          <span>
            ⏱ 5 min read
          </span>

          <Link
            to={`/blog/${blog.id}`}
            className="btn"
          >
            Read More
          </Link>

        </div>

      </div>

    </div>
  );
}

export default BlogCard;