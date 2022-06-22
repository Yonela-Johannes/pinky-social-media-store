import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../../../actions/posts'
import 'emoji-mart/css/emoji-mart.css';
import { BiMessageSquareAdd } from "react-icons/bi";
import { BiSend } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { BiImageAdd } from "react-icons/bi";
import './input.css'

export default function Input({user, showCreatePost, setShowCreatePost, currentId}) {
  const posts = useSelector((state) => state.posts)

  const dispatch = useDispatch()
  const imageRef = useRef()
  const [postData, setPostData] = useState({creator: '', title: '', input: '', message: '', tags: '', selectedFile: null})

  const onImageChange = (e) => {
      if(e.target.files && e.target.files[0]){
        let img = e.target.files[0]
        setPostData({...postData, selectedFile: URL.createObjectURL(img)})
      }
  }
  const sendPost = (e) => {
    e.preventDefault() 
    if(currentId){
      dispatch(updatePost(currentId, postData))
    }else{
      dispatch(createPost(postData))
    }
  }
  return (
    <div className='mainPostContainer'>
      <div className='mainPostWrapper'>
        <div className='exitIcon'>
          <GrFormClose className='icon' onClick={()=> setShowCreatePost(!showCreatePost)} />
        </div>
        <div className={`p-3 overflow-y-hidden overflow-x-hidden`}>
          <div className='postImageContainer flex items-center'>
              <img src={user?.profilePicture} alt='' className='h-10 w-10 rounded-full cursor-pointer object-cover' />
            <p className='username'>{user?.username}</p>
          </div>
            <div className=''>
              <div className='postMiddleWrapper'>
                <div>
                  <p className='titles'>Title</p>
                  <input placeholder="What's the title?" rows='1' className='bg-transparent text-black outline-none p-[5px] text-gray placeholder-gray-500 txt-lg tracking-wide m-[10px] min-h-[50px]' value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>
                </div>
                <div>
                  <p className='titles'>Message</p>
                  <textarea placeholder="What's is happening?" rows='2' className='bg-transparent text-black outline-none p-[5px] text-gray placeholder-gray-500 txt-lg tracking-wide m-[10px] w-full min-h-[50px]' value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
                </div>
                  {postData.selectedFile && ( 
                    <div className='relative'>
                      <div className='absolute w-8 h-8 bg-[pink] hover:[bg-gray] bg-opacity-75 rounded-full flex items-center 
                        justify-center top-1 left-1 cursor-pointer' onClick={() => postData.selectedFile(null)}><BiMessageSquareAdd />
                      </div>
                        <img src={postData.selectedFile} alt=" select " className='rounded-2xl max-h-80 0bject-contain' />
                    </div>
                  )}
                      <div className='flex items-center mb-[10px]'>
                        <BiImageAdd className='icon' onClick={() => imageRef.current.click() }/>
                          <input className='filebase' ref={imageRef} onChange={onImageChange} type='file' />
                      </div>
              </div>               
                  <div className='flex item-center justify-between pt-2.5'>
                        <div  className="newPostButton" onClick={sendPost}>Post
                          <BiSend className='sendIcon' />
                        </div>
                  </div>    
            </div>              
        </div>
      </div>
    </div>
  );
}
