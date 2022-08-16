import { Link } from "react-router-dom";

const Footer = () => {
    return (
<footer>
    <Link className="link" to="/admin">ADD POSTS</Link>
    <Link className="link" to="/login">LOGIN</Link>
</footer>
    )
}

export default Footer;

// if logged in show add posts, if not show login