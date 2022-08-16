import { useState } from 'react'
import BlogPreview from "../components/BlogPreview";
import BlogItem from "../components/BlogItem";


const BlogPage = (props) => {
    const [shown, setShown] = useState(null);

    const displayBlog = (e) => {
        setShown(e)
        window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' });
    }
    const hideBlog = () => {
        setShown(null);
    }


    return (
        <div className="section">
            <div>
                <BlogItem display={shown} onClick={hideBlog} />
            </div>
            <div className="blog-previews">
                {props.entries && props.entries.map(entry => {
                    return (
                        <BlogPreview entry={entry} onClick={() => { displayBlog(entry) }} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default BlogPage