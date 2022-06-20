import './home.css'
import ProfileWidget from '../../components/profileWidget/ProfileWidget'
import LeftWidget from '../../components/leftWidget/LeftWidget'
import FeedWidget from '../../components/feedWidget/FeedWidget'
import RightWidget from '../../components/RightWidget/RightWidget'

const Home = ({user, products, cartItems, onAdd, onRemove, text}) => {
  return (
    <div className='home'>
        <LeftWidget />
        <ProfileWidget user={user}/>
        <FeedWidget user={user} products={products} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} text={text} />
        <RightWidget />
    </div>
  )
}

export default Home