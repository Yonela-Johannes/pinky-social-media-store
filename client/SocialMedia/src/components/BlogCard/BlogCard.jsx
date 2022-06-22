import './card.css'
import { Link } from 'react-router-dom'
import logo from "../../img/logopinky.png"
import moment from 'moment'
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function BlogCard( {user, blog, currentId, setCurrentId } ) {
  return (
      <div className='card'>
        <Link to={'/blogs/'+ blog.id}>
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
                <button className='blogButton' >read more...</button>
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
                    <AiFillEdit className='icon blogEdit' onClick={() => setCurrentId(blog._id)} />
                    <MdDelete className='icon blogDelete' />
                </div>
          </div>
        </Link>
      </div>
  ) 
}
