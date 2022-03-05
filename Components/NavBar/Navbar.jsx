import React from 'react';
import Image from 'next/image';
import Navigation from './Navigation';
import avatar from '../../img/avatar.png'
import Logo from '../../img/logopinky.png'
import { Link } from 'react-router-dom'
import styles from '../../styles/Navbar.module.css'

const Navbar = ( props ) => {
  const { countCartItems, user, admin } = props;

  const LogoImage = {
    width: 40,
    height: 50,
    borderRadius: 25,
    padding: 5,
}

  return (
         <nav className={styles.navbar}>
              <div className={styles.grow}>
                {/* <Link to='/' className="name"> */}
                  <Image src={Logo} width={40} height={50} className={styles.logoImage} alt="logo" />
                  Be Pleasured By Pinky
                {/* </Link> */}
                { user ? (
                  <ul className={styles.list}>
                    <li className='listItem'>
                      <img className='avatar' src={user.image} alt='' />
                    </li>
                    <li className='listItem username'>{user?.userName}</li>
                    <li className='listItem jobTitle'>{user.jobTitle}</li>
                  </ul>
                ) : (
                  // <Link to='/signin'>
                    <ul className='list'>
                      <li className='listItem'>
                        <img className='avatar' src={avatar} alt='user avatar' />
                      </li>
                      <li className='listItem username'>Jane Doe</li>
                      <li className='listItem login'>log in</li>
                    </ul>
                  // </Link>
                )}

              <Navigation countCartItems={countCartItems} admin={admin} user={user} />
              </div>
        </nav>
  )
};

export default Navbar;