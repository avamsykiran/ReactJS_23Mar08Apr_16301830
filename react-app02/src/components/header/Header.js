
function Header(props){
    return (
        <nav className="navbar navbar-dark bg-dark navbar-collapse-sm">
            <a href="#" className="navbar-brand">{props.title}</a>
        </nav>
    );
}

export default Header;