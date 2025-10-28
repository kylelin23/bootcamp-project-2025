import style from './blogPreview.module.css'

export default function BlogPreview() {
  return (
    <div className = {style.blog}>
        <div className = {style.schoolContainer}>
            <p className = {style.blogText}><strong>October 1st, 2025</strong></p>
        </div>

        <div className = {style.schoolContainer}>
            <p className = {style.blogText}><strong>September 24th, 2025</strong></p>
        </div>
    </div>
  );
}