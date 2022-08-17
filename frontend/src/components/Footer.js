import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext, { AuthProvider } from "../context/AuthProvider";

const Footer = () => {
    const { auth } = useContext(AuthContext);

    return (
        <footer>
            {
                auth ?
                    <Link className="link" to="/admin">ADD POSTS</Link> :
                    <Link className="link" to="/login">LOGIN</Link>
            }

        </footer>
    )
}

export default Footer;
