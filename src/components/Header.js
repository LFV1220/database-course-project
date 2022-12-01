import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({ isSignedIn, setSignedIn }) {

    const signOut = () => setSignedIn(false);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/South_Florida_Bulls_logo.svg/1200px-South_Florida_Bulls_logo.svg.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    { isSignedIn
                    ? <Link to='/Login'><button className='signout-btn' onClick={() => signOut()}>Sign Out</button></Link>
                    : <Link to='/Login'><button className='signout-btn'>Sign In</button></Link> }
                </Container>
            </Navbar>
        </>
    );
}

export default Header;