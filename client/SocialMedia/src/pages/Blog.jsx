import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../actions/blogs'
import { BsPencilSquare } from "react-icons/bs";
import './styles.css';
import BlogCard from '../components/BlogCard/BlogCard';
import Input from '../components/input/input';

export default function Blog({user, admin}) {
    const blogs = useSelector((state) => state.blogs)
    const dispatch = useDispatch()
    const [showCreateBlog, setShowCreateBlog] = useState(false)
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getBlogs())
    }, [dispatch])

    return (
        <div className='main'>
          <h2 className='head'>Explore</h2>
                <div className='post'>
                    <BsPencilSquare className='icon' onClick={() => setShowCreateBlog(!showCreateBlog)}/>
                </div>
                {showCreateBlog && (<Input currentId={currentId} setCurrentId={setCurrentId} showCreateBlog={showCreateBlog} setShowCreateBlog={setShowCreateBlog} />)}
                <div className='blogHome'>
                    {blogs.map(blog => (
                        <BlogCard setCurrentId={setCurrentId} key={blog.id} blog={blog} user={user} />
                        ))
                    }
                </div>
        </div>
    )
}
