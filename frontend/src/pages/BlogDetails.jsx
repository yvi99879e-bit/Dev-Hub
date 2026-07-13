import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../config";

function BlogDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);

  useEffect(() => {

    loadBlog();

  }, []);

  const loadBlog = async () => {

    try {

      const res = await axios.get(`${API}/blogs/${id}`);

      setBlog(res.data[0]);

    } catch (err) {

      console.log(err);

    }

  };

  const deleteBlog = async () => {

    const confirmDelete = window.confirm(
      "Delete this blog?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(`${API}/blogs/${id}`);

      alert("Blog Deleted");

      navigate("/");

    } catch (err) {

      console.log(err);

    }

  };

  if (!blog) {

    return (

      <div className="loader">

        Loading...

      </div>

    );

  }

  return (

    <section className="blog-details">

      <img

        src={blog.image}

        alt={blog.title}

      />

      <span className="blog-category">

        {blog.category}

      </span>

      <h1>

        {blog.title}

      </h1>

      <p>

        <strong>Author:</strong> {blog.author}

      </p>

      <br />

      <p>

        {blog.content}

      </p>

      <br />

      <div
        style={{
          display: "flex",
          gap: "15px"
        }}
      >

        <button className="btn">

          ❤️ Like

        </button>

        <button
          className="btn"
          onClick={deleteBlog}
        >

          🗑 Delete

        </button>

      </div>

    </section>

  );

}

export default BlogDetails;