import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="#" className="navbar-brand">{props.title}</a>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Activities</Link>
                </li>
                <li className="nav-item">
                    <Link to="/new" className="nav-link">Add Activity</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;