import style from "./blog.module.css"
import BlogPreview from "../../components/blogPreview"
import blogs from "../blogData"

export default function Blog() {
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
