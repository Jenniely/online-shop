import React from 'react';

import './button-styles.scss';

const MyButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} my-button`} {...otherProps}>
        {children}
    </button>
)

export default MyButton;