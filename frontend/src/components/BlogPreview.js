const BlogPreview = (props) => {
    return (
        <div className=" blog blog-preview" onClick={props.onClick}>
            <h2>{props.entry.title}</h2>
            <p>{props.entry.date}</p>
            <img src={props.entry.img[0].url} alt="img" />
        </div>
    )
}
export default BlogPreview;