import moment from 'moment'
import './post.css';
// import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function Post({ user, post, currentId, setCurrentId, showCreatPost, setShowCreatePost}) {
  
    const postEdit = () => {
        setShowCreatePost(!showCreatPost)
        setCurrentId(post._id)
    }
    return (
        <div className="postContainer">
            <div className="post__top">
                <img src={user?.profilePicture} className='avatar' alt='avatara'/>
                <div className="post__avatar">
                    <div className="post__topInfo">
                        <h3 className='username'>{user?.username}</h3>
                        <h3 className='title_name'>{user?.name}</h3>                        
                        <p className='date'>{moment(post?.createdAt).fromNow()}</p>
                    </div>
                </div>
                <AiFillEdit className='icon edit' onClick={postEdit} />
                <MdDelete className='icon delete' />
            </div>
            <div className="post__bottom">
                <p className='message'>{post?.message}</p>
            </div>
            <div className="post__image">
                <img src={user?.image} alt="" />
               <p>{post?.title}</p>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <BsSuitHeart />
                    <p>{post?.likeCount}</p>
                </div>
                <div className="post__option">
                    <AiOutlineLike/>
                    <p>{post?.starCount}</p>
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