import React, {useState, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createBlog, updateBlog } from '../../actions/blogs'
import { IoMdClose} from "react-icons/io";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { BiSend } from "react-icons/bi";

const Input = ({user, showCreateBlog, setShowCreateBlog, currentId}) => {
    const dispatch = useDispatch()
    const filePickerRef = useRef(null)
    const [blogData, setBlogData] = useState({
        title: '', image: '', description: '', message: '', likeCount: 0,
    })

    const sendBlog = (e) => {
        e.preventDefault()
        if(currentId){
            dispatch(updateBlog(currentId, blogData))
        }else{
            dispatch(createBlog(blogData))
        }
    }
    const addImageToPost = (e) => {
    if(e.target.files && e.target.files[0]){
        let img = e.target.files[0]
        setBlogData({...blogData, image: URL.createObjectURL(img)})
  }
}
  return (
    <div className='blogMainContainer'>
            <GrFormClose className='icon' onClick={()=> setShowCreateBlog(!showCreateBlog)} />
        <div className={`p-3 flex space-x-3 overflow-y-hidden rounded-md`}>
            <img className='h-11 w-11 rounded-full cursor-pointer object-cover' src={user?.image} alt='dp'/>
            <div>
                <div className>
                    <input value={blogData.title} onChange={e => setBlogData({...blogData, title: e.target.value})} className='bg-transparent outline-none text-white text-lg placeholder-[pink] p-[5px] min-h-[30px] ' placeholder="Enter blog title"/>
                    <textarea value={blogData.description} rows='1' onChange={e => setBlogData({...blogData, description: e.target.value})} className='bg-transparent outline-none text-white text-lg placeholder-[pink] p-[5px] tracking-wide w-full min-h-[30px] ' placeholder="Enter short description"/>
                    <textarea value={blogData.message} rows='2' onChange={e => setBlogData({...blogData, message: e.target.value})} className='bg-transparent outline-none text-white text-lg placeholder-[pink] p-[5px] tracking-wide w-full min-h-[30px] ' placeholder="Enter blog"/>
                    {blogData.image && (
                        <div className='relative'>
                            <div className='absolute w-8 h-8 bg-white hover:bg-gray opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-poiner' onClick={() => setBlogData.image(null)}>
                                <IoMdClose className='icon' />
                            </div>
                            <img src={blogData?.image} alt='selected input' className='rounded-2xl max-h-80 object-contain' />
                        </div>
                    )}
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='hoverAnimation' onClick={() => filePickerRef.current.click()}>
                                <HiOutlinePhotograph className='icon' />
                                <input type='file' hidden onChange={addImageToPost} ref={filePickerRef} />
                            </div>
                        </div>
                    </div>
                </div>
                  <div className='flex item-center justify-between pt-2.5'>
                        <div  className="newPostButton" onClick={sendBlog}>Post Blog
                          <BiSend className='sendIcon' />
                        </div>
                  </div>    
            </div>
        </div>
    </div>
  )
}

export default Input