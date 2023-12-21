import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from "react-router-dom"
import {Container, Navbar} from "react-bootstrap";

function NavMenu() {
    return (<>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto" defaultActiveKey="/articles" as="ul">
                        <NavLink to='/articles' className='m-2'>Articles</NavLink>
                        <NavLink to='/photos' className='m-2'>Photos</NavLink>
                        <NavLink to='/users' className='m-2'>Users</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu;