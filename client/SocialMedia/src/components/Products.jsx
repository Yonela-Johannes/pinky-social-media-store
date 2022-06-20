import React from 'react';
import './products.css'
import { FaCartArrowDown } from "react-icons/fa";

export default function Product( props ) {
    const { product, onAdd } = props;
    return(
        <div className='productContainer'>
                <div className='productName'>{product?.item.name}</div>
                <div>
                    <img className="productImage" src={product?.item.image} alt=' product ' />
                </div>
                <div className="bottomCardContainer">
                    <div className="priceContainer">
                        <div className="price">
                            <p className='previousPrice'>was: </p>
                            <p className='rand previous'>R</p>
                            <p className='oldPrice'>{product?.item.oldPrice}</p>  
                        </div>
                        <div className="price">
                            <p className='currentPrice'>now</p>
                            <p className='rand'>R</p>
                            <p className='newPrice'>{product?.item.price}</p>                            
                        </div>
                        <button className="homeCartButton"  onClick={() => onAdd(product)}><FaCartArrowDown className='homeCartIcon' /><div>Add To Cart</div></button>
                    </div>
                    <div className='stockContainer'>
                        <p>In Stock</p>
                    </div>
                </div>
         </div>
    )
}
