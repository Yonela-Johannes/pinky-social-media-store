import { useState } from 'react'
import { Link } from 'react-router-dom'
import './signin.css'

export const Signin = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  })
   const [errorMessage, setErrorMessage] = useState()
  return (
    <div className='signin'>
      <div className='signinWrapper'>
        <p className='signinTitle'>Signin</p>
        <div className='signinContainer'>
          <div>
              <div>
                <p>Yonela Johannes</p>
            </div>
            <div>
              <p>Email</p>
              <input type='email' placeholder='Enter email' value={userData.password} />
            </div>
            <div>
              <p>Password</p>
              <input placeholder='password' value={userData.password} type="password" secureTextEntry />
            </div>
          </div>
          <div>

          </div>
          <div className='button'>
            Log in
          </div>
          <Link to="signup">Forgot Password?</Link>
          <Link to='signup'>Create a new Account?</Link>
        </div>
          {errorMessage && <p className="message">{errorMessage}</p>}
      </div>
    </div>
  )
}
