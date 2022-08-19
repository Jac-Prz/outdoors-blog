const BlogItem = (props) => {

    return (
        <div
            className="blog blog-item"
            style={props.display ? { display: "inline-block" } : { display: "none" }}
            onClick={props.onClick}
        >
            <div >
                <h1>{props.display && props.display.title}</h1>
                <h4>{props.display && props.display.date}</h4>
                <p>{props.display && props.display.body}</p>
            </div>

            {props.display && props.display.img.map((image) => {
                return <div><img src={image.url} alt="img" /></div>
            }
            )}
        </div>
    )
}

export default BlogItem;
