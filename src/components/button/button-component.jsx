import React from 'react';

import './button-styles.scss';

const MyButton = ({children, ...otherProps}) => (
    <button className='my-button' {...otherProps}>
        {children}
    </button>
)

export default MyButton;