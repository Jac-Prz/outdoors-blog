import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link className="link" to="/hike">HIKE</Link>
            <Link className="link" to="/bike">BIKE</Link>
            <Link className="link" to="/other">OTHER</Link>
        </nav>
    )
}
export default Nav;