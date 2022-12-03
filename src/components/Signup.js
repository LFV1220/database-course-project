import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';
import { insertUser } from '../dbutil';

function Signup({ setSignedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Signup = () => {;
    setSignedIn(true);
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user
          console.log(user)
        })
    } catch (err) {
      alert('Signup unsuccessful')
    }

    // Insert user into sql
    insertUser(email, password);
  }

  return (
    <>
      <div className='flex login-container-wrapper'>
          <div className='flex login-container'>
              <h1>Signup</h1>
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
          <Form.Label>Re-Enter Password</Form.Label>
                      <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                  </Form.Group>
                  <div className='flex submit-container'>
                      <Link to='/'>
                          <button className='signin-btn' variant="primary" type="submit" onClick={() => Signup()}>
                              Signup
                          </button>
                      </Link>
                  </div>
              </Form>
          </div>
      </div>
    </>
  );
}

export default Signup;