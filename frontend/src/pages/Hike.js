import BlogPage from "../components/BlogPage";

const Hike = (props) => {
    return (
        <BlogPage page="hike" entries={props.entries}/>
    )
}
export default Hike;