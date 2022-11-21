import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';

const Login = () => {
    return (
        <div className='flex login-container-wrapper'>
            <div className='flex login-container'>
                <h1>Login</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        Luis Vega, Joshua Gourlay, and Adrian Grillo
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='flex submit-container'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                    <a>Don't have an account? Sign up here</a>
                </Form>
            </div>
        </div>
    )
}

export default Login;