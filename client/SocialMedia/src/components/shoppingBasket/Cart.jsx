import React from 'react';
import Basket from './Basket';
import { Link } from 'react-router-dom';
import { RiHome2Line } from "react-icons/ri";
import './cart.css'

import { RiDeleteBin2Fill } from "react-icons/ri";

const Cart = (props) => {
  const { onAdd, onRemove, cartItems } = props;

  return (
    <div className='mainCartContainer'>
        <h3 className='cartHead'>Shopping List</h3>
      <div className="cartMainWrapper">
          <div className='items'>
            {
              cartItems.map((item) => (
                <div key={item.id} className='cartContainer'>
                          <div className='item-name'>{item?.item.name}</div>
                          <div className='item-price'>R {item?.item.price}</div>                  
                  <div className="buttons">
                      <div onClick={() => onRemove(item)}><RiDeleteBin2Fill className='cartIcon' /></div>
                  </div>
                </div>
              ))
            }
            <div>
            </div>
          </div>
          <>
            {cartItems.length === 0 && 
            <div className='emptyCart'>
                <p className='cartHead'>Cart Empty</p>
                <p className='cartDesc'>Add items to cart</p>
                <Link to="/" className='button'>
                  <button className="homeShoppingCartButton" ><RiHome2Line className='homeCartIcon' />Go to Shopping Cart</button>
                </Link>   
              </div>
            }
          </>
          <Basket 
            onAdd={onAdd}
            cartItems={cartItems} />  
      </div>
    </div>
  )
};

export default Cart
