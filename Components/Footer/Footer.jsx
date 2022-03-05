import logo from '../../img/niello.png'
import siteLogo from '../../img/logopinky.png'
// import { IconName } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { TiLocationOutline} from "react-icons/ti";
import { RiFacebookCircleLine } from "react-icons/ri";
import styles from "../../styles/Home.module.css"

export default function Footer() {
  return (
      <div className={styles.footer}>

        <div className={styles.footerContainer}>
            <p>Be Pleasured By Pinky</p>
            <img className={styles.siteLogo} src={siteLogo} alt='logo' />
        </div>
        <div className={styles.footerLinks}>
            <p>bepleasuredbypinky@gmail.com</p>
            <a className='link' href="https://wa.me/<2814994487>" target='_blank' rel="noreferrer"><BsWhatsapp className='footer-logo-app log' /><p>WhatsApp</p></a>
            <a className='link' href="http://www.facebook.com/pinky.maroya" target='_blank' rel="noreferrer"><RiFacebookCircleLine className='footer-logo-fb log' /><p>Facebook</p></a>
            <a className='link' href="#" target='_blank' rel="noreferrer"><TiLocationOutline className='footer-logo-loc log' /><p>Cape Town</p></a>
            <small>&copy; Copyright 2022, Be Pleasured By Pinky</small>
        </div>
        <div>
            <p>Yonela Johannes</p>
            <p>Full-Stack Web-Developer</p>
            <img className='footerLogo' src={logo} alt='logo' />
        </div>
      </div>
  )
}
