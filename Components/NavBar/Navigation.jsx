import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { Badge } from '@mui/material';
import { GrBlog } from "react-icons/gr";
import styles from "../../styles/Navbar.module.css"
// import {NavLink, Link} from 'react-router-dom'
import { useGoogleLogout } from "react-google-login";

const Navigation = (props) => {

    const {countCartItems, user, admin } = props;
    return (
        <nav className={user ? 'appBar' : 'appBar line'}>
                    <div className={styles.grow}>
                        <div className={styles.button}>
                                <ul className={styles.navList}>
                                    <li className={styles.navLink}>
                                        {/* <NavLink to='/'> */}
                                            <div aria-label='Show cart items' color='inherit'>
                                                <AiOutlineShop className={styles.icon} />
                                            </div>
                                        {/* </NavLink> */}
                                    </li>
                                    <li className='navLink'>
                                        {/* <NavLink to='/cart'> */}
                                            <div aria-label='Show cart items'>
                                                <Badge className='badge' badgeContent={countCartItems} />
                                                    <MdOutlineShoppingBag className={styles.icon} />
                                            </div>
                                        {/* </NavLink> */}
                                    </li>
                                    <li className='navLink'>
                                        {/* <NavLink to='/feeds'> */}
                                            <div aria-label='Newsfeeds' color='inherit'>
                                                <MdOutlineDynamicFeed className={`${user} ? ${styles.icon} : ${styles.iconDisabled}`}/>
                                            </div>
                                        {/* </NavLink> */}
                                        </li>
                                    <li className='navLink'>
                                        {/* <NavLink to='/blog'> */}
                                            <div aria-label='Blog' color='inherit'>
                                                <GrBlog className={styles.icon} />
                                            </div>                                   
                                        {/* </NavLink> */}
                                        </li>
                                        {
                                            admin ? (
                                                <li className='navLink'>
                                                    {/* <NavLink to='/admin'> */}
                                                        <div className='headerButtons' aria-label='Administration' color='inherit'>
                                                        <MdOutlineAdminPanelSettings className={`${styles.icon} ${styles.adminIcon}`} />
                                                        </div>                                   
                                                    {/* </NavLink> */}
                                                    </li>

                                            ) : ''
                                        }
                                        <li className='navLink'>
                                            {/* <NavLink to='/signin'> */}
                                                <div aria-label='sign out' color='inherit'>
                                                    <BiLogIn className={`${styles.icon} ${styles.logout}`} />
                                                </div>                                   
                                            {/* </NavLink> */}
                                            </li>
                                </ul>
                        </div>

                    </div>    
        </nav>
    )
};

export default Navigation;