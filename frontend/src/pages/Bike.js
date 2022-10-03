import BlogPage from "../components/BlogPage";

const Bike = (props) => {
    return (
        <BlogPage page="bike" entries={props.entries} />
    )
}

export default Bike;
