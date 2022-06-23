import React, {useState, useEffect} from 'react';
import { deleteProduct } from '../actions/products'
import './products.css'
import { useDispatch } from 'react-redux';
import { FaCartArrowDown } from "react-icons/fa";
import { AiFillEdit, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

export default function Product( props ) {
    const { product, onAdd, currentId, setCurrentId, showAdd, setShowAdd } = props;
    const dispatch = useDispatch()
    const editProduct = () => {
        setShowAdd(!showAdd)
        setCurrentId(product._id)
    }
    return(
        <div className='productContainer'>
                <div className='productName'>{product?.product}</div>
                <div>
                    <img className="productImage" src={product?.image} alt=' product ' />
                </div>
                <div className="bottomCardContainer">
                    <div className="priceContainer">
                        <div className="price">
                            <p className='previousPrice'>was: </p>
                            <p className='rand previous'>R</p>
                            <p className='oldPrice'>{product?.previousPrice}</p>  
                        </div>
                        <div className="price">
                            <p className='currentPrice'>now</p>
                            <p className='rand'>R</p>
                            <p className='newPrice'>{product?.price}</p>                            
                        </div>
                    </div>
                    <div className='productBottomContainer'>
                        <AiFillEdit className='productIcons' onClick={editProduct} />
                        <MdDelete className='productIcons' onClick={() => dispatch(deleteProduct(product._id))} />
                    </div>
                    <div className='stockContainer'>
                        <button className="homeCartButton"  onClick={() => onAdd(product)}><FaCartArrowDown className='homeCartIcon' /><div>Add To Cart</div></button>
                        <p>In Stock</p>
                        <div className='productIconsContainer'>
                            <div>
                                <BsSuitHeart className='productIcons productReactIcons'/>
                                <p className='likeCounters'>{product?.likeCount}</p>
                            </div>
                            <div>
                                <AiOutlineStar  className='productIcons productReactIcons' />
                                <p className='likeCounters'>{product?.recommendCount} </p>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
    )
}
