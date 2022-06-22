import Feeds from './feed/Feeds'
import Blog from '../../pages/Blog'
import { useState, useEffect } from 'react'
import './feedWidget.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomeWidget from '../../pages/home/HomeWidget'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'

const FeedWidget = ({user, products, onAdd, onRemove, cartItems, text}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className='mainContainersWidget'>
        <Routes>
          <Route path='/products' element={<HomeWidget user={user} products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} text={text} />} />
          <Route path='/feeds' element={<Feeds user={user} />} />
          <Route path='/blogs' element={<Blog user={user} />} />
        </Routes>
    </div>
  )
}

export default FeedWidget