import { useLocation } from 'react-router-dom'
import CommentForm from './CommentForm'


export default function Post({blogPost}) {
  
    const location = useLocation()
    console.log(location)
    const path = location.pathname.split('/')[2]
    const blog = blogPost.find((p) => p.id.toString() === path)

  return (
    <>
      <div className='post'>
          <img className='postImage' src={blog?.img} alt='' />
          <h1 className='postTitle'>{blog?.title}</h1>
          <p className='postDesc'>{blog?.desc}</p>
          <p className='postLongDesc'>{blog?.longDesc}</p>
      </div>
      {/* <CommentForm /> */}
    </>
  )
}
