// import Basket from './Basket';
// import Spinner from '../Components/Post/Feed.js/Spinner';
import Products from '../../components/Products';
import './styles.css'
import { BsCartCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Announcement } from '../../components/Announcement';
const Home = ( props ) => {
  
  const { products, onAdd, onRemove, cartItems, text } = props;

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