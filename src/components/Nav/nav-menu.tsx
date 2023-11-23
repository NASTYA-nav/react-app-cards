import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"

function NavMenu() {
    return (
        <Nav defaultActiveKey="/articles" as="ul">
            <Nav.Item as="li">
                <Nav.Link>
                    <Link to='/articles'>Articles</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link>
                    <Link to='/photos'>Photos</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link>
                    <Link to='/users'>Users</Link>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavMenu;