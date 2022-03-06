import Spinner from '../Components/Post/Feed.js/Spinner';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getProviders, getSession, SessionProvider, useSession } from "next-auth/react";
import { FcGoogle } from 'react-icons/fc'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { firebaseApp } from '../firebase'
import styles from "../styles/Signin.module.css"
import Image from 'next/image';
import { Router } from '@mui/icons-material';

export default function signin({providers}) {
  const { data: session } = useSession();
  const firebaseAuth = getAuth(firebaseApp)
  const provider = new GoogleAuthProvider()

  const login = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider)
    const { refreshToken, providerData } = user;
    
    localStorage.setItem('user', JSON.stringify(providerData))
    localStorage.setItem('accessToken', JSON.stringify(refreshToken))
    Router.push("/")
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.head}>Sign In</h2>
      <div className={styles.formContainer}>
        <div className={styles.spinnerLoginContainer}>
          <Spinner />
        </div>
        <div>
        <div className={styles.appWrapper}>
            </div>
            <div onClick={login} className={styles.loginWrapper}>
               {/* {Object.values(providers).map( provider => (
                   <div key={provider.name}>
                        <button onClick={() => signIn(provider.id, {callBackUrl: "/"})} className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                            </span>
                            <span className="relative text-white">Sign in with {provider.name}</span>
                        </button>                       
                   </div>
               ))}  */}
               <FcGoogle fontSize={30} />
               <p className='text-lg font-semibold ml-4'>Sign in with Google</p>
            </div>
        </div>
    </div>
    </div>   
  )
}

export async function getServerSideProps (context){

  const providers = await getProviders();
  const session = await getSession(context);
  return {
    props: {
      providers,
      session,
    },
  };
}
