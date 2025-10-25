import style from "./blog.module.css"

export default function Blog() {
  return (
    <div>
        <div className = {style.gradientContainer}>
            <h1 className = {style.pageTitle}>Blog</h1>
        </div>
        <div id = {style.blogContainer}></div>
    </div>
  );
}
