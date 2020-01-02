import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Dropdown, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const changeUsername = (e) => {
        e.preventDefault();
        setUsername(e.target.value)

    }

    const changePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value)

    }

    const login = (e) => {
        
        e.preventDefault();
        axios.post(`https://shirt-store123.herokuapp.com/api/login`, {'username': username, 'password': password})
        .then(response => {
            // const sess = response.data.session.cookie
        
            console.log(response.headers)

        // sessionStorage.setItem('cookie', sess)
        // localStorage.setItem('user', response.data.message)
// localStorage.setItem('id', response.data.user_id)
        // history.push('/')
})
        .catch(error => {
            console.log(error)
        })
      
    }

        return (
            <div>
                
                <Dropdown className='form-dropdown'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Login
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <form onSubmit={login} className='form'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className='form-text'>Email address</Form.Label>
                                <Form.Control onChange={changeUsername} name='username' type="username" placeholder="Enter username" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='form-text'>Password</Form.Label>
                                <Form.Control onChange={changePassword} name='password' type="username" type="password" placeholder="Password" />
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
               
            </div>
        )
    }


export default withRouter(Login);
