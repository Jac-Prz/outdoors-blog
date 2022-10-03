import BlogPage from "../components/BlogPage";

const Other = (props) => {
    return (
        <BlogPage page="alt" entries={props.entries} />
    )
}

export default Other;
