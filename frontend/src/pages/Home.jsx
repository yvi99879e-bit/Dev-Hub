import { useEffect, useState } from "react";
import axios from "axios";

import API from "../config";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import BlogCard from "../components/BlogCard";
import FeaturedBlog from "../components/FeaturedBlog";
import Stats from "../components/Stats";
import TopAuthors from "../components/TopAuthors";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  // Fetch blogs from backend
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const res = await axios.get(`${API}/blogs`);

      setBlogs(res.data);
    } catch (error) {
      console.log(error);
      alert("Unable to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  // Search + Category Filter
  const filteredBlogs = blogs.filter((blog) => {
    const matchSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.author.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || blog.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <>

      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Categories
        category={category}
        setCategory={setCategory}
      />

      <section className="section">

        <h2 className="section-title">
          Latest Developer Blogs
        </h2>

        {loading ? (

          <div className="loader">
            Loading Blogs...
          </div>

        ) : filteredBlogs.length === 0 ? (

          <div className="noBlogs">

            <h2>No Blogs Found</h2>

            <p>Try another search or category.</p>

          </div>

        ) : (

          <div className="grid">

            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))}

          </div>

        )}

      </section>

    </>
  );
}

export default Home;