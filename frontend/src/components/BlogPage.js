import { useState } from 'react'
import BlogPreview from "../components/BlogPreview";
import BlogItem from "../components/BlogItem";

const BlogPage = (props) => {
    const [showing, setShowing] = useState(null);
    const displayBlog = (e) => {
        setShowing(e)
        window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' });
    }
    const hideBlog = () => {
        setShowing(null);
    }

    return (
        <section id={props.page}>
        <h2>{props.page.toUpperCase()} BLOG POSTS</h2>
            <div>
                <BlogItem display={showing} onClick={hideBlog} />
            </div>
            <div className="blog-preview-container">
                {props.entries && props.entries.map((entry, index) => {
                    return (
                        <BlogPreview key={index} entry={entry} onClick={() => { displayBlog(entry) }} />
                    )
                })
                }
            </div>
            </section>
    )
}

export default BlogPage