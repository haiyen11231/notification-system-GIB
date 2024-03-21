import { Link, useLocation } from "react-router-dom";
import "../styles/components/Header.css";

const Header = () => {
    const { pathname } = useLocation();

    return (
        <div className="header">
            <h4 className="header__title">
                <Link to="/">Notification task</Link>
            </h4>
            {/* <nav className="header__nav"> */}
            <ul className="nav__list">
                <li className="nav__item">
                    <Link
                        to="/"
                        className={`nav__anchor ${
                            pathname === "/" && "clicked"
                        }`}
                    >
                        Main
                    </Link>
                </li>
                <li className="nav__item">
                    <Link
                        to="/settings"
                        className={`nav__anchor ${
                            pathname === "/settings" && "clicked"
                        }`}
                    >
                        Settings
                    </Link>
                </li>
            </ul>
            {/* </nav> */}
        </div>
    );
};

export default Header;
