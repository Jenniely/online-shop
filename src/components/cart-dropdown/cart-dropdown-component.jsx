import React from 'react';
import MyButton from '../button/button-component.jsx';
import CartItem from '../cart-item/cart-item-component.jsx';
import  {selectCartItems} from '../../redux/cart/cart-selectors.js';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart-actions.js';

import {connect}  from 'react-redux';

import './cart-dropdown-styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                (cartItems.map(cartItem => 
            (<CartItem key={cartItem.id} item={cartItem}/>)
            ))
            : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        
        <MyButton onClick={()=>{
        history.push('/checkout');
        dispatch(toggleCartHidden());
        }
        }>GO TO CHECKOUT</MyButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
}) 

export default withRouter(connect(mapStateToProps)(CartDropdown));