import {useState, useEffec, useEffect } from 'react';
import './card.css'
import { Link } from 'react-router-dom'
import logo from "../../img/logopinky.png"
import { useSelector, useDispatch } from 'react-redux';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function BlogCard( {user, blog, currentId, setCurrentId, showCreateBlog, setShowCreateBlog} ) {

  const editBlog = () => {
    setShowCreateBlog(!showCreateBlog)
    setCurrentId(blog._id)
  }
  return (
      <div className='card'>
          <div className="blogPostHead">
              <p className='desc'>{user?.name}</p>
            <img className='userImage blogImage' src={user?.image} alt='' />
          </div>
          <div className="blogPostContent">
            <p className='desc'>{blog?.title}</p>
            <img className='img' src={blog?.image} alt='' />
            <div className='blogPostDesc'>
              <p className='desc'>{blog.description}</p>
            </div>
            <div className="blogPostBody">
              <div>
                <Link to={'/blogs/'+ blog.id}>
                  <button className='blogButton' >read more...</button>
                </Link>
              </div>
              <div className='userDetailsContainer'>
                <img className='userImage blogImage' src={logo} alt='' />
                <p className='pinky'>BePleasuredByPinky</p>
              </div>
            </div>
                <div className="post__option bloglike">
                    <BsSuitHeart />
                    <p>{blog?.likeCount}</p>
                </div>
                <div className='blogBottomContainer'>
                    <AiFillEdit className='icon blogEdit' onClick={editBlog} />
                    <MdDelete className='icon blogDelete' />
                </div>
          </div>
      </div>
  ) 
}
