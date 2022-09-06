const BlogPreview = (props) => {
    return (
        <div className=" blog blog-preview" onClick={props.onClick}>
            <h3>{props.entry.title && props.entry.title}</h3>
            <p>{props.entry.date && props.entry.date}</p>
            <img src={props.entry.img[0].url && props.entry.img[0].url} alt="img" />
        </div>
    )
}
export default BlogPreview;