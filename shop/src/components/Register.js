import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'tls';

export default class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
            
        }
        console.log(this.state)
       
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    register = (e) => {
        e.preventDefault();
        axios.post('https://shirt-store123.herokuapp.com/register', this.state, )
        .then(response => {
            console.log(response.cookies)
        //    this.props.history.push('/login') 
        })
        .catch(error => {
            console.log(error)
        })
     
    }

    test = e => {
        e.preventDefault();
        axios.get('https://shirt-store123.herokuapp.com')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    


    render() {
        console.log(this.state.username)
        console.log(this.state.password)
        return (
            <div>
                <form onSubmit={this.register}>
                    <input 
                    onChange={this.changeHandler}
                    placeholder='username'
                    value={this.state.username}
                    name='username'
                    />
                    <input 
                    onChange={this.changeHandler}
                    placeholder='password'
                    value={this.state.password}
                    name='password'
                    />
                <button type='submit'>Add</button>
                </form>
                <button onClick={this.test} type='button'>test</button>
            </div>
        )
    }
}