import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import AddBlog from "./pages/AddBlog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/add"
          element={<AddBlog />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/blog/:id"
          element={<BlogDetails />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;