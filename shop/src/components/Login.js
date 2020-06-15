import React, {useState} from 'react';
import axios from 'axios';
import { Dropdown, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

const Login = (props) => {
    const [token, setToken] = useState('');

    const push = e => {
        axios.get('https://shirt-store123.herokuapp.com/cart', {headers : {Authorization: `Bearer ${token}`}})
        .then(res => {
        })
        .catch(err => {
        })
    }
    
        

        return (
            <div>
                
                <Dropdown className='form-dropdown'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Login
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <form onSubmit={props.login} className='form'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className='form-text'>Email address</Form.Label>
                                <Form.Control onChange={props.changeUsername} name='username' type="username" placeholder="Enter username" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='form-text'>Password</Form.Label>
                                <Form.Control onChange={props.changePassword} name='password' type="username" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check className='form-text' type="checkbox" label="Check me out" />
                            </Form.Group>
                            <div className='button'>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                        </Dropdown.Menu>
                    </Dropdown>
               <button onClick={push}>push</button>
            </div>
        )
    }


export default withRouter(Login);
