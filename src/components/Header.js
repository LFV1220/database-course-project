import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { auth, app } from '../firebase-config';

function Header() {
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
                    {/* <button className='signout-btn' onClick={() => console.log(auth._currentUser)}>Sign Out</button> */}
                    { auth._currentUser == null 
                    ? <Link to='/Login'><button className='signout-btn'>Sign In</button></Link>
                    : <button className='signout-btn' onClick={() => auth.signOut()}>Sign Out</button> }

                </Container>
            </Navbar>
        </>
    );
}

export default Header;