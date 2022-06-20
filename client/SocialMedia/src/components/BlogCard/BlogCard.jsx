import './card.css'
import { Link } from 'react-router-dom'
import logo from "../../img/logopinky.png"

export default function BlogCard( {user, blog } ) {
  return (
      <div className='card'>
        <Link to={'/blogs/'+ blog.id.current}>
          <div className="blogPostHead">
            <img className='img' src={blog?.image} alt='' />
          </div>
          <div className="blogPostContent">
            <div className='blogPostDesc'>
              <p className='desc'>{blog.description}</p>
            </div>
            <div className="blogPostBody">
              <div>
                <button className='blogButton' >read more...</button>
              </div>
              <div className='userDetailsContainer'>
                <img className='userImage blogImage' src={logo} alt='' />
              <p className='username'>Yonela</p>
              <p className='releaseDate'>{blog.releaseDate}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
  ) 
}
