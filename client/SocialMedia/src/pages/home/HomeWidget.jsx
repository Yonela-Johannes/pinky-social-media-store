import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../actions/products'
import Products from '../../components/Products';
import './styles.css'
import { useState } from 'react';
import { BsPencilSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Announcement } from '../../components/Announcement';
import ProductInput from '../../components/modal/input/ProductInput'

const Home = ( props ) => {
  const dispatch = useDispatch()
  const productss = useSelector((state) => state.products)
  const {products, onAdd, onRemove, cartItems, text, user } = props;
  const [showAdd, setShowAdd] = useState(false)
    const [currentId, setCurrentId] = useState(null)

  console.log(productss)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <main className='main'>
       <Announcement text={text} />
          <h2 className='head'>Products</h2>
          <BsPencilSquare className='icon productIcon' onClick={() => setShowAdd(!showAdd)} />
        <div className="container">
          <div className="products">
              {
                products.map(product => (
                  <Products onAdd={onAdd} product={product} cartItems={cartItems} setCurrentId={setCurrentId}  showAdd={showAdd} setShowAdd={setShowAdd}/>
                  ))
                }
          </div>
        </div>
      {showAdd && (<ProductInput user={user} currentId={currentId} setCurrentId={setCurrentId} showAdd={showAdd} setShowAdd={setShowAdd}/>)}
    </main>
  )
};
export default Home