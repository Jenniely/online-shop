import React from 'react';
import MyButton from '../button/button-component.jsx';

import './cart-dropdown-styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <MyButton>GO TO CHECKOUT</MyButton>
    </div>
);

export default CartDropdown;