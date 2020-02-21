import React from 'react';
import SignIn from '../../components/sign-in/sign-in-component.jsx';
import SignUp from '../../components/sign-up/sign-up-component.jsx';

import './sign-in-page-styles.scss';

const SignInPage = () => (
    <div className='sign-in-page'>
      <SignIn/>
      <SignUp/>
    </div>
);

export default SignInPage;