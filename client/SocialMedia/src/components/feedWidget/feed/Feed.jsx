import { useState } from 'react';
import './feed.css'
import { BsPencilSquare } from "react-icons/bs";
import Input from './input/Input'
import Post from './post/Post';
function Feed( {user, admin} ) {
    const [showCreatePost, setShowCreatePost] = useState(false)
    return (
        <div className='mainPostContainerWrapper'>
            <div className='subhead'>
                <h2 className='head'>Descussion</h2>

                <div className='post'>
                    <BsPencilSquare className='icon' onClick={() => setShowCreatePost(!showCreatePost)}/>
                </div>
            </div>
            <div className="mainPostContainerBox">
                <Post user={user} />
            </div>
            {showCreatePost && (<Input user={user} showCreatePost={showCreatePost} setShowCreatePost={setShowCreatePost} />)}
        </div>
    );
}

export default Feed