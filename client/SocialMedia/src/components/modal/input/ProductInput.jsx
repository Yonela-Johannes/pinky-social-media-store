import React, {useState, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { createProduct, updateProduct } from '../../../actions/products'
import { IoMdClose} from "react-icons/io";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { BiSend } from "react-icons/bi";
import './newproduct.css'

const PostInput = ({user, showAdd, setShowAdd , currentId}) => {
    const dispatch = useDispatch()
    const filePickerRef = useRef(null)
    const [productData, setProductData] = useState({product: '', image: '', previousPrice: '', price: '', quanityStock: '', likesCount: 0})
    
    const addImageToPost = (e) => {
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0]
            setProductData({...productData, image: URL.createObjectURL(img)})
        }
    }
    const sendProduct = (e) => {
        e.preventDefault()
        if(currentId){
            dispatch(updateProduct(currentId, productData))
        }else{
            dispatch(createProduct(productData))
        }
    }
  return (
    <div className='newProduct'>
        <div className='newProductContainer'>
                <GrFormClose className='icon' onClick={()=> setShowAdd(!showAdd)} />
            <div className={`p-3 flex space-x-3 overflow-y-hidden rounded-md`}>
                <img className='h-11 w-11 rounded-full cursor-pointer object-cover' src={user?.image} alt='dp'/>
                <div className='w-full'>
                    <div>
                        <input value={productData.product} onChange={e => setProductData({...productData, product: e.target.value})} className='bg-transparent outline-none text-gray text-lg placeholder-gray-500 p-[5px] min-h-[50px] ' placeholder="Enter Product name"/>
                        <input type='number' value={productData.previousPrice} onChange={e => setProductData({...productData, previousPrice: e.target.value})} className='bg-transparent outline-none text-gray text-lg placeholder-gray-500 p-[5px] min-h-[50px] ' placeholder="Enter Previous Price"/>
                        <input type='number' value={productData.price} onChange={e => setProductData({...productData,price: e.target.value})} className='bg-transparent outline-none text-gray text-lg placeholder-gray-500 p-[5px] min-h-[50px] ' placeholder="Enter Price"/>
                        <input type='number' value={productData.quanityStock} onChange={e => setProductData({...productData, quanityStock: e.target.value})} className='bg-transparent outline-none text-gray text-lg placeholder-gray-500 p-[5px]  min-h-[50px] ' placeholder="Enter Qauntity in Stock"/>

                        {productData.image && (
                            <div className='relative'>
                                <div className='absolute w-8 h-8 bg-white hover:bg-gray opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-poiner' onClick={() => setProductData.image(null)}>
                                    <IoMdClose className='icon' />
                                </div>
                                <img src={productData.image} alt='selected input' className='rounded-2xl max-h-40 object-contain' />
                            </div>
                        )}
                    </div>
                        <div className='flex items-center justify-between pt-2.5'>
                            <div className='flex items-center'>
                                <div className='hoverAnimation' onClick={() => filePickerRef.current.click()}>
                                    <HiOutlinePhotograph className='icon' />
                                    <input type='file' hidden onChange={addImageToPost} ref={filePickerRef} />
                                </div>
                            </div>
                        </div>
                    <div className='flex item-center justify-between pt-2.5'>
                            <div  className="newPostButton" onClick={sendProduct} >Post
                            <BiSend className='sendIcon' />
                            </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostInput