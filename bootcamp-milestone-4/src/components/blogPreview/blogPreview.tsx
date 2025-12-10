import style from './blogPreview.module.css'
// import type { Blog } from '../../app/blogData'
import Comment from '../comment/Comment';
import type { IComment } from '../comment/Comment'

type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    comments: IComment[];
    slug: string;
}

export default function BlogPreview({ title, date, description, image, imageAlt, comments }: Blog) {
  return (
    <div className = {style.blog}>
        <div className = {style.schoolContainer}>
            <p className = {style.blogTitle}>{title}</p>
            <p className = {style.blogText}><strong>{date}</strong></p>
            <p className = {style.blogText}>{description}</p>
            <img className = {style.blogImage} src = {image} alt = {imageAlt} width = {200}></img>
            <div className = {style.commentTitle}>Comments: </div>
            <Comment
              comments = {comments}
            />
        </div>
    </div>
  );
}