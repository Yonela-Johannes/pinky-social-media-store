import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../actions/posts'
import './feed.css'
import { BsPencilSquare } from "react-icons/bs";
import Input from './input/Input'
import Post from './post/Post';
function Feed( {user, admin} ) {
    const [showCreatePost, setShowCreatePost] = useState(false)
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)


    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <div className='mainPostContainerWrapper'>
            <div className='subhead'>
                <h2 className='head'>Descussion</h2>

                <div className='post'>
                    <BsPencilSquare className='icon' onClick={() => setShowCreatePost(!showCreatePost)}/>
                </div>
            </div>
            <div className="mainPostContainerBox">
                {posts.map(post => (
                    <Post user={user} post={post} setCurrentId={setCurrentId}  />
                ))}
            </div>
            {showCreatePost && (<Input user={user} currentId={currentId} setCurrentId={setCurrentId}  showCreatePost={showCreatePost} setShowCreatePost={setShowCreatePost} />)}
        </div>
    );
}

export default Feed