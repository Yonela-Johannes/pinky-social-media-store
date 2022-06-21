import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../actions/products'
import Products from '../../components/Products';
import './styles.css'
import { BsCartCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Announcement } from '../../components/Announcement';


const Home = ( props ) => {
  const dispatch = useDispatch()
  const productss = useSelector((state) => state.products)
  const {products, onAdd, onRemove, cartItems, text } = props;

  console.log(productss)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <main className='main'>
       <Announcement text={text} />
          <h2 className='head'>Products</h2>
        <div className="container">
          <div className="products">
              {
                products.map(product => (
                  <Products onAdd={onAdd} product={product} cartItems={cartItems} />
                  ))
                }
          </div>
        </div>
    </main>
  )
};
export default Home