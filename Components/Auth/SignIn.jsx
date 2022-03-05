import React, {useState} from 'react';
import Spinner from '../Post/Feed.js/Spinner';
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';
import GoogleLogin from 'react-google-login';
import styles from "../../styles/Signin.module.css"


export default function SignIn({providers}) {
    console.log(providers)
    const responseGoogle = (response) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj));
        const { name, googleId, imageUrl, email, admin } = response.profileObj;
        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            admin: admin,
            image: imageUrl,
            email: email,
        }

    }

  return (
      <div className={styles.formContainer}>
        <div className={styles.spinnerLoginContainer}>
          <Spinner />
        </div>
        <div>
        <div className={styles.appWrapper}>
            </div>
            <div className={styles.loginWrapper}>
                <GoogleLogin className={styles.googleWrapper}
                    // clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                    clientId= '1012340695541-l7j2gt5f7pcjsq2kf7ar6oigmoqmiqum.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <div 
                            type='button' 
                            className={`${styles.loginButton} ${styles.google}'`} 
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            >
                            <FcGoogle /><p>Sign in with Google</p>
                        </div>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy='single_host_origin'
                />
            </div>
        </div>
    </div>
  )
}
