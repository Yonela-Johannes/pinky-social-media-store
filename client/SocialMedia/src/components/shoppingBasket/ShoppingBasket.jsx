
import Cart from './Cart';
import './shoppingbasket.css'

const ShoppingBasket = ({products, cartItems, onAdd, onRemove}) => {
  return (
    <div className='shoppingBasket'>
        <p>Be Pleasured By Pinky</p>
        <div>
          <Cart products={products} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        </div>
    </div>
  )
}

export default ShoppingBasket;
