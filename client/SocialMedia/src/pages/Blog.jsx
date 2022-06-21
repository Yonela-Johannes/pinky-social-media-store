import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../actions/blogs'
import { BsPencilSquare } from "react-icons/bs";
import './styles.css';
import React, {useState, useEffect} from 'react';
import BlogCard from '../components/BlogCard/BlogCard';
import Input from '../components/input/input';

export default function Blog({user, admin}) {
    const blogs = useSelector((state) => state.blogs)
    const dispatch = useDispatch()
    const [showCreateBlog, setShowCreateBlog] = useState(false)
    
    // const [blogPost, setBlogPost] = useState(null) 
    
    console.log(blogs)
    useEffect(() => {
        dispatch(getBlogs())
    }, [dispatch])

    const blogPost = [
        {
        id: 1,
        title: 'Blog Ideas',
        image: 'https://64.media.tumblr.com/af67e109cca43c869c317f09d3695acb/tumblr_nqaxaltHam1qf8mfdo4_1280.jpg',
        description: 'A boutique Cape Town Model Agency with a portfolio of world-class local & international male & female models. Best modelling agencies in Cape Town.',
        mesage: `Please take the uploaded images using a normal point and shoot digital camera or good quality camera phone.
The images must be in colour and must not be manipulated or photo-shopped at all.
Please do not wear make up or hair products as we would like to see you as naturally as possible.
Try to take the images against a plain background.`,
        likeCount: 1,
        releaseDate: ''
    },
        {
        id: 2,
        title: 'Blog Ideas',
        image: 'https://64.media.tumblr.com/af67e109cca43c869c317f09d3695acb/tumblr_nqaxaltHam1qf8mfdo4_1280.jpg',
        description: 'A boutique Cape Town Model Agency with a portfolio of world-class local & international male & female models. Best modelling agencies in Cape Town.',
        mesage: `Please take the uploaded images using a normal point and shoot digital camera or good quality camera phone.
The images must be in colour and must not be manipulated or photo-shopped at all.
Please do not wear make up or hair products as we would like to see you as naturally as possible.
Try to take the images against a plain background.`,
        likeCount: 1,
        releaseDate: ''
    },

]

    return (
        <div className='main'>
          <h2 className='head'>Explore</h2>
                <div className='post'>
                    <BsPencilSquare className='icon' onClick={() => setShowCreateBlog(!showCreateBlog)}/>
                </div>
                {showCreateBlog && (<Input user={user} showCreateBlog={showCreateBlog} setShowCreateBlog={setShowCreateBlog} />)}
                <div className='blogHome'>
                    {blogPost.map(blog => (
                        <BlogCard key={blog.id} blog={blog} user={user} />
                        ))
                    }
                </div>
        </div>
    )
}
