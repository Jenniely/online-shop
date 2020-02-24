import React, {Component} from 'react';
import MyButton from '../button/button-component.jsx';
import FormInput from '../../components/form-input/form-input-component.jsx'

import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';

import './sign-in-styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
       const  {email, password} = this.state;

       try {
           await auth.signInWithEmailAndPassword(email, password);
           this.setState({email: '', password: ''});
       } catch(error) {
           console.log(error);
       }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='email'
                    required/>  
                    <FormInput
                    name='password' 
                    type='password'
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='password'
                    required/>    
                    <div className='buttons'>
                    <MyButton type='submit'>Sign In</MyButton>       
                    <MyButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</MyButton>           
                    </div>
                </form>
            </div>
        ) 
    }
}

export default SignIn;