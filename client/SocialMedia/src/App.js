import { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import products from './data/products'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import "./App.css"
import { Signin } from './components/auth/Signin'
import { Signup } from './components/auth/Signup'
import Navbar from "./components/NavBar/Navbar";
import { UserAuth } from './context/AuthContext';

function App() {
  const { user, token } = UserAuth()

  console.log(user)
  // const user = {
  //   username: 'Keesh',
  //   name: 'Keasha A Zendaya',
  //   firstname: ' Keasha A',
  //   lastname: 'Zendaya',
  //   email: "keasha-A@pinky.com",
  //   isAdmin: false,
  //   title: "customer",
  //   about: '',
  //   image: 'https://i0.wp.com/expatpanda.com/wp-content/uploads/2019/07/thumbnail_IMG_8793.jpg?resize=640%2C427&ssl=1',
  //   profilePicture: "https://image-prod.iol.co.za/16x9/800/Ponahalo-Mojapelo-without-the-black-face-Picture-Instagram-ponahalo?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/899c6a16-161b-5d8a-b331-de37525c1792&operation=CROP&offset=0x343&resize=1080x608",
  //   address: {
  //     streetName: 'Parlaiment',
  //     HouseNumber: "05",
  //     location: 'Mfuleni',
  //     postalCode: 7100,
  //     city: 'Cape Town',
  //   },
  // }
  const text = `Hurry up it's 40% off now.`

  const getCartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : localStorage.setItem('cartItems', JSON.stringify(products))
  const [cartItems, setCartItems] = useState(getCartItems);

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist) {
      setCartItems(cartItems.map((x) =>
        x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x) =>
        x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
      ));
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }



  return (
    <AnimatePresence>
      <div className="app">
        <Navbar user={user} products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        <Routes>
          <Route path='signin' element={<Signin />} />
        </Routes>
        <div className="app-container">
          <div className='blurr' style={{ top: '-25%', left: '0' }}></div>
          <div className='blurr' style={{ top: '50%', right: '0rem' }}></div>
          {user ? (
            <Home user={user} products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} text={text} />
          ) : (
            <div >
              <Signup />
              {/* <Signin /> */}
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
