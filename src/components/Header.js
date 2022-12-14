import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import { insertFeedback } from '../dbutil';

function Header({ isSignedIn, setSignedIn }) {

    const [feedback, setFeedback] = useState('');
    const signOut = () => setSignedIn(false);
    const [show, setShow] = useState(false);
	const [feedbackText, setFeedbackText] = useState('');

    const handleClose = () => {
        setShow(false);

		const regex = /^[A-Za-z0-9./!?]*$/;
		console.log(regex.test(feedbackText))

		if(!regex.test(feedbackText))
			alert('Invalid characters in feedback form');
		else
			insertFeedback('joshua135@usf.edu', feedbackText);
    };

    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/"><img
                            alt=""
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/South_Florida_Bulls_logo.svg/1200px-South_Florida_Bulls_logo.svg.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        /></Link>
                    </Navbar.Brand>
                    {isSignedIn
                        ? <Link to='/Login'><button className='signout-btn' onClick={() => signOut()}>Sign Out</button></Link>
                        : <Link to='/Login'><button className='signout-btn'>Sign In</button></Link>}

                    {isSignedIn
                        ? <div>
                            <button className="signout-btn" onClick={handleShow}>
                                Feedback
                            </button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Got feedback?</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p margin="45px">I have a joke about UDP. But you might not get it.</p>
                                    <Form>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>What did you think?</Form.Label>
                                            <Form.Control as="textarea" rows={3} onChange={e => setFeedbackText(e.target.value)} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handleClose}>
                                        Send Feedback
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        : null}
                </Container>
            </Navbar>
        </>
    );
}

export default Header;