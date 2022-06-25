import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Logo from '../../img/logopinky.png'
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../../context/AuthContext'
import  { useNavigate  } from 'react-router-dom'
import {signin, signup } from '../../actions/auth'
import { AiOutlineLogin } from 'react-icons/ai'
import './signin.css'

export const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, googleSignin } = UserAuth()
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

  const handleSignup = (e, res) => {
    e.preventDefault()
    dispatch(signin(userData, navigate))
    dispatch(signup(FormData, navigate))

  }

  return (
    <div className='signin'>
      <div className='signinWrapper'>
        <p className='signinTitle'>Signin</p>
        <div className='signinContainer'>
            <GoogleButton onClick={handleGoogleSignin}
            />
          <div className='signincontentContainer'>
            <div className='signinContent'>
              <input type='file' />
            </div>
            <div className='signinContent'>
              <label for='username'>Username</label>
              <input type='text' placeholder='enter username*' name='username' value={userData.username} onChange={(e) => setUserData({...userData, username: e.target.value})}  required/>
            </div>
            <div className='signinContent'>
              <label for='name'>Name</label>
              <input type='text' name='username' placeholder='enter name*' value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} required/>
            </div>
            <div className='signinContent'>
              <label for='email'>Email</label>
              <input type='email' name='email' placeholder='enter email*' value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} required />
            </div>
            <div className='signinContent'>
              <label for='password'>Password</label>
              <input placeholder='enter password*' value={userData.password} type="password" onChange={(e) => setUserData({...userData, password: e.target.value})} required />
            </div>
          </div>
          <div>
            <div className='signinButton' onClick={handleSignup}>Sign up</div>
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
