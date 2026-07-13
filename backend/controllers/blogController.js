import db from "../db.js";

// Get All Blogs
export const getBlogs = (req, res) => {

  db.query("SELECT * FROM blogs", (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

};

// Get Blog By ID
export const getBlogById = (req, res) => {

  const id = req.params.id;

  db.query(
    "SELECT * FROM blogs WHERE id=?",
    [id],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);

    }
  );

};

// Add Blog
export const addBlog = (req, res) => {

  const { title, author, category, image, content } = req.body;

  const sql =
    "INSERT INTO blogs(title,author,category,image,content) VALUES(?,?,?,?,?)";

  db.query(
    sql,
    [title, author, category, image, content],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Blog Added Successfully"
      });

    }
  );

};

// Update Blog
export const updateBlog = (req, res) => {

  const id = req.params.id;

  const { title, author, category, image, content } = req.body;

  const sql =
    "UPDATE blogs SET title=?,author=?,category=?,image=?,content=? WHERE id=?";

  db.query(
    sql,
    [title, author, category, image, content, id],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Blog Updated Successfully"
      });

    }
  );

};

// Delete Blog
export const deleteBlog = (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM blogs WHERE id=?",
    [id],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Blog Deleted Successfully"
      });

    }
  );

};