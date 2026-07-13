import { Link } from "react-router-dom";

function FeaturedBlog() {
  return (
    <section className="featured">

      <div className="featured-text">

        <span className="featured-tag">
          ⭐ Featured Article
        </span>

        <h1>
          Complete React Roadmap 2026
        </h1>

        <p>
          Learn React from beginner to advanced with projects,
          hooks, routing, APIs and best practices.
        </p>

        <Link to="/blog/1" className="btn">
          Read Article →
        </Link>

      </div>

      <div className="featured-image">

        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
          alt=""
        />

      </div>

    </section>
  );
}

export default FeaturedBlog;