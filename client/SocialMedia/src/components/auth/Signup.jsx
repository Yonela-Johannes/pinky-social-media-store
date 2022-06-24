import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logopinky.png'
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../../context/AuthContext'
import  { useNavigate } from 'react-router-dom'
import { AiOutlineLogin } from 'react-icons/ai'
import './signin.css'

export const Signup = () => {
  const navigate = useNavigate()
  const {user, googleSignin } = UserAuth()
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    showPassword: false
  })

  const handleGoogleSignin = async () => {
    try {
      await googleSignin()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(user !== null){
      navigate('/')
    }
  }, [user])

  return (
    <div className='signin'>
      <div className='signinWrapper'>
        <p className='signinTitle'>Signin</p>
        <div className='signinContainer'>
            <GoogleButton onClick={handleGoogleSignin} />
          <div className='signincontentContainer'>
            <div className='signinContent'>
              <input type='file' />
            </div>
            <div className='signinContent'>
              <label for='username'>Username</label>
              <input type='text' placeholder='enter username*' name='username' value={userData.password}  required/>
            </div>
            <div className='signinContent'>
              <label for='name'>Name</label>
              <input type='text' name='username' placeholder='enter name*' value={userData.password} required/>
            </div>
            <div className='signinContent'>
              <label for='email'>Email</label>
              <input type='email' name='email' placeholder='enter email*' value={userData.password} required />
            </div>
            <div className='signinContent'>
              <label for='password'>Password</label>
              <input placeholder='enter password*' value={userData.password} type="password" required />
            </div>
          </div>
          <div>
            <div className='signinButton'>Sign up</div>
          </div>
          <div className='signinBottomContainer'>
            <Link to="signup">Forgot Password?</Link>
            <Link to='signup'>Create a new Account?</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
