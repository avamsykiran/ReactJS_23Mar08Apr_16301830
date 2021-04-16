
import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";
import Depts from "./depts/components/Depts";
import Emps from "./emps/components/Emps";

const HRMApp = () => (
    <Router>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <Link to="/" className="navbar-brand">HRM Portal</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Departments</Link>
                </li>
                <li className="nav-item">
                    <Link to="/emps" className="nav-link">Employees</Link>
                </li>
            </ul>
        </nav>
        <main className="container-fluid p-4">
            <Switch>
                <Route path="/emps" component={Emps} />
                <Route path="/" component={Depts} />
            </Switch>
        </main>
    </Router>
);

export default HRMApp;