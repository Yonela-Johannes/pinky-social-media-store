import React from 'react';
import styles from "../styles/Signin.module.css"
import SignIn from '../Components/Auth/SignIn';
const Signin = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.head}>Sign In</h2>
        <SignIn />
    </div>
  )
};

export default Signin
