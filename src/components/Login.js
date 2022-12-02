import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';

const Login = ({ setSignedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = () => {;
        setSignedIn(true);
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    const user = userCredential.user
                    console.log(user)
                })
        } catch (err) {
            alert('Login unsuccessful')
        }
    }

    return (
        <div className='flex login-container-wrapper'>
            <div className='flex login-container'>
                <h1>Login</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Luis Vega, Joshua Gourlay, and Adrian Grillo
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='flex submit-container'>
                        <Link to='/'>
                            <button className='signin-btn' variant="primary" type="submit" onClick={() => Login()}>
                                Submit
                            </button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;