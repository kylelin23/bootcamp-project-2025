import style from "./blog.module.css"
import BlogPreview from "../../components/blogPreview"
// import blogs from "../blogData"
import connectDB from "../database/db"
import BlogSchema from "../database/blogSchema"

async function getBlogs(){
    await connectDB() // function from db.ts before

    try {
        // query for all blogs and sort by date
        const blogs = await BlogSchema.find().sort({ date: -1 }).orFail()
        // send a response as the blogs as the message
        return blogs
    } catch (err) {
        return null
    }
  }

export default async function Blog() {


  const blogs = await getBlogs() ?? [];

  return (
    <div>
        <div className = {style.gradientContainer}>
            <h1 className = {style.pageTitle}>Blog</h1>
        </div>
        {
          blogs.map(blog =>
            <BlogPreview
              key = {blog.slug}
              title = {blog.title}
              date = {blog.date}
              description = {blog.description}
              image = {blog.image}
              imageAlt = {blog.imageAlt}
              slug = {blog.slug}
            />
          )}

    </div>
  );
}
