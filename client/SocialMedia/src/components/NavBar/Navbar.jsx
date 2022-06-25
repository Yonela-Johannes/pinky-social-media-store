import React from 'react';
import Navigation from './Navigation';
import { motion } from 'framer-motion'
import avatar from '../../imgdata/avatar.png'
import Logo from '../../imgdata/logopinky.png'
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import'./navbar.css'
import  { useNavigate } from 'react-router-dom'
import { MdOutlineLogout } from "react-icons/md"
import { useState } from 'react';

const Navbar = ({user, countCartItems, products, onAdd, onRemove, cartItems} ) => {
    const { logOut } = UserAuth()

  const [showLogoutList, setShowLogoutList] =useState(false)
  const [showAdd, setShowAdd] = useState(false)

  const handleSignOut = async () => {
    try {
      await logOut()
      localStorage.removeItem('profile')
    } catch (error) {
      console.log(error)
    }
  }
  return (
         <nav className='navbar'>
              <div className='grow'>
                <Link to='/' className="name">
                  <img src={Logo} width={40} height={50} className='logoImage' alt="logo" />
                  <div className='name'>Be Pleasured By Pinky</div>
                </Link>
                { user ? (
                  <div className='relative' onClick={()=> setShowLogoutList(!showLogoutList)}>
                    <ul className='list'>
                      <li className='listItem'>
                        <motion.img  whileTap={{scale: 0.5}} width={40} height={40} className='avatar' src={user?.image} alt='' />
                      </li>
                      <div>
                        <li className='listItem username'>{user?.name}</li>
                        <li className='listItem jobTitle'>{user?.email}</li>
                      </div>
                    </ul>
                    {showLogoutList && (
                        <div className='popupList'>
                          <div className='popupListContent' onClick={handleSignOut}>
                            <p>Logout</p> <MdOutlineLogout className='icon listIcon' />
                          </div>
                        </div>
                      )
                    }
                  </div>

                ) : (
                  <Link to='/signin'>
                  <div onClick=''>
                    <ul className='list'>
                      <li className='listItem'>
                        <img className='avatar' src={avatar} alt='user avatar' />
                      </li>
                      <li className='listItem username'>Jane Doe</li>
                      <li className='listItem login'>log in</li>
                    </ul>
                  </div>
                </Link>
                )}
              <Navigation countCartItems={countCartItems}  user={user}  products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
              </div>
        </nav>
  )
};

export default Navbar;