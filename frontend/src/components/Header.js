import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>GRANDMA GOES OUT</h1>
            <nav>
                <Link className="link" to="/hike">HIKE</Link>
                <Link className="link" to="/bike">BIKE</Link>
                <Link className="link" to="/other">ALT</Link>
                <Link className="link" to="/">HOME</Link>
            </nav>
        </header>

    )
}
export default Header;