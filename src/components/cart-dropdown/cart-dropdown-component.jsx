import React from 'react';
import MyButton from '../button/button-component.jsx';
import CartItem from '../cart-item/cart-item-component.jsx';

import {connect}  from 'react-redux';

import './cart-dropdown-styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => 
            (<CartItem key={cartItem.id} item={cartItem}/>)
            )}
        </div>
        
        <MyButton>GO TO CHECKOUT</MyButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
}) 

export default connect(mapStateToProps)(CartDropdown);