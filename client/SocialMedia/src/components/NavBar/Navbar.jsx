import React from 'react';
import Navigation from './Navigation';
import { motion } from 'framer-motion'
import avatar from '../../imgdata/avatar.png'
import Logo from '../../imgdata/logopinky.png'
import { Link } from 'react-router-dom';

import'./navbar.css'
import { MdOutlineAddBusiness } from "react-icons/md"
import { MdOutlineLogout } from "react-icons/md"
import { useState } from 'react';
import { NewProduct } from '../modal/NewProduct';

const Navbar = ({user, countCartItems, products, onAdd, onRemove, cartItems} ) => {
  const [showLogoutList, setShowLogoutList] =useState(false)
  const [showAdd, setShowAdd] = useState(false)
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
                          <div className='popupListContent'>
                            <p onClick={() => setShowAdd(!showAdd)}>New Item</p><MdOutlineAddBusiness className='icon listIcon' />
                          </div>
                          <div className='popupListContent'>
                            <p>Logout</p> <MdOutlineLogout className='icon listIcon' />
                          </div>
                        </div>
                      )
                    }
                  </div>

                ) : (
                  // <Link to='/signin'>
                  <div onClick=''>
                    <ul className='list'>
                      <li className='listItem'>
                        <img className='avatar' src={avatar} alt='user avatar' />
                      </li>
                      <li className='listItem username'>Jane Doe</li>
                      <li className='listItem login'>log in</li>
                    </ul>
                  </div>
                  // </Link>
                )}

              <Navigation countCartItems={countCartItems}  user={user}  products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
              {showAdd && (<NewProduct  showAdd={showAdd} setShowAdd={setShowAdd}/>)}
              </div>
        </nav>
  )
};

export default Navbar;