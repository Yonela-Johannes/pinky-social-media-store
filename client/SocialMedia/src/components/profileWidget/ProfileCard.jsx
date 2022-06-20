import { motion } from 'framer-motion'
import Pinky from '../../img/logopinky.png'
import PinkyProfile from '../../img/60.png'
import Prince from '../../img/niello.jpg'
import './profileWidget.css'

const ProfileCard = ({user}) => {
  return (
    //   Be Pleasured By Pinky
    <div className='profileCards'>
        <div className='profileCard'>
            <div className='profileImage'>
            <motion.img  whileTap={{scale: 0.5}} src={Pinky} className='profileAvatar' alt='' />
            </div>
            <div className='content'>
                <p className='titleName'>Be Pleasured By Pinky</p>
                <p className='profileTitle'>Company</p>
            </div>
        </div>
        {/* Pinky's Profile */}
        <div className='profileCard'>
            <div className='profileImage'>
            <motion.img  whileTap={{scale: 0.5}}  src={PinkyProfile} className='profileAvatar' alt='' />
            </div>
            <div className='content'>
                <p className='titleName'>Pinky</p>
                <p className='profileTitle'>Manager</p>
            </div>
        </div>
        <div className='profileCard'>
            <div className='profileImage'>
            <motion.img  whileTap={{scale: 0.5}}  src={Prince} className='profileAvatar' alt='' />
            </div>
            <div className='content'>
                <p className='titleName'>Yonela Prince Johannes</p>
                <p className='profileTitle'>Senior Developer</p>
            </div>
        </div>
        <div className='profileCard'>
            <div className='profileImage'>
            <motion.img  whileTap={{scale: 0.5}}  src={user?.image} className='profileAvatar' alt='' />
            </div>
            <div className='content'>
                <p className='titleName'>{user?.name}</p>
                <p className='profileTitle'>{user?.title}</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard