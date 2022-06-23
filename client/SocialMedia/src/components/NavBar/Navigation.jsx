import { useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingBasket from '../shoppingBasket/ShoppingBasket'
import { MdOutlineDynamicFeed } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiMessageRoundedDetail} from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import { GrBlog } from "react-icons/gr";

import"./navbar.css"

const Navigation = (props) => {
    const {user, products, onAdd, onRemove, cartItems } = props;
    const [showBasket, setShowBasket] = useState(false)
    return(
        <div>
           <nav className={user ? 'appBar' : 'appBar line'}>
                    <div className='grow'>
                        <div className='button'>
                            <ul className='navList'>
                                <li className='navLink'>
                                <NavLink to='/products'>
                                    <div aria-label='Show cart items' color='inherit'>
                                        <AiOutlineShop className='icon' />
                                    </div>
                                </NavLink>                                    
                                </li>
                                <li className='navLink'>
                                    <div aria-label='Show cart items' onClick={() => setShowBasket(!showBasket)}>
                                            <MdOutlineShoppingBag className='icon' />
                                    </div>
                                </li>

                                <li className='navLink'>
                                    <NavLink to='/feeds'>
                                        <div aria-label='Newsfeeds' color='inherit'>
                                            <MdOutlineDynamicFeed className={`${user ? 'icon' : 'iconDisabled'}`}/>
                                        </div>
                                    </NavLink>
                                    </li>
                                <li className='navLink'>
                                    <NavLink to='/chatmessages'>
                                        <div aria-label='Newsfeeds' color='inherit'>
                                            <BiMessageRoundedDetail className={`${user ? 'icon' : 'iconDisabled'}`}/>
                                        </div>
                                    </NavLink>
                                    </li>
                                <li className='navLink'>
                                <NavLink to='/blogs'>
                                    <div aria-label='Blog' color='inherit'>
                                        <GrBlog className='icon' />
                                    </div>                                   
                                </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
           </nav>
           {showBasket &&  <ShoppingBasket products={products} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />}
        </div>
    )
};

export default Navigation;