import {Link} from 'react-router-dom';

const Header = (props) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Activity Manager</Link>

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link"> 
                    <i className="fa fa-list"> Activities List</i>
                </Link>
                <Link to="/add" className="nav-link"> 
                    <i className="fa fa-plus"> New Activity</i>
                </Link>
            </li>

        </ul>
    </nav>
);

export default Header;