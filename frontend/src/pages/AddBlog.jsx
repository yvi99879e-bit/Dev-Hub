import { useState } from "react";
import axios from "axios";
import API from "../config";
import { useNavigate } from "react-router-dom";

function AddBlog() {

  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    category: "",
    image: "",
    content: ""
  });

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !blog.title ||
      !blog.author ||
      !blog.category ||
      !blog.content
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {

      await axios.post(`${API}/blogs`, blog);

      alert("Blog Published Successfully!");

      navigate("/");

    } catch (err) {

      console.log(err);

      alert("Unable to publish blog.");

    }

  };

  return (

    <section className="section">

      <div className="form-container">

        <h1 className="section-title">

          Write a New Blog

        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={blog.title}
            onChange={handleChange}
          />

          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={blog.author}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={blog.category}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={blog.image}
            onChange={handleChange}
          />

          <textarea
            name="content"
            placeholder="Write your article..."
            value={blog.content}
            onChange={handleChange}
          />

          <button className="btn">

            Publish Blog

          </button>

        </form>

      </div>

    </section>

  );

}

export default AddBlog;