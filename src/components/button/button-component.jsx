import React from 'react';

import './button-styles.scss';

const MyButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''}  ${isGoogleSignIn ? 'google-sign-in' : ''} my-button`} {...otherProps}>
        {children}
    </button>
);

export default MyButton;