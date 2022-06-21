import React from 'react';
import './post.css';
// import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
// import { BsSuitHeart } from "react-icons/bs";

function Post({ user}) {
    return (
        <div className="postContainer">
            <div className="post__top">
                <img src={user?.profilePicture} className='avatar' alt='avatara'/>
                <div className="post__avatar">
                    <div className="post__topInfo">
                        <h3>{user?.username}</h3>
                        <h3>{user?.name}</h3>                        
                        {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                    </div>
                </div>
            </div>
            <div className="post__bottom">
                <p>{user?.message}</p>
            </div>
            <div className="post__image">
                <img src={user?.image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <BsSuitHeart />
                    <p>Love</p>
                </div>
                <div className="post__option">
                    <AiOutlineLike/>
                    <p>Upvoke</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post