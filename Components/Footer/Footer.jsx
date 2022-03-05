import logo from '../../img/niello.png'
import siteLogo from '../../img/logopinky.png'
import Image from 'next/image';
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
            <Image width={40} height={50} src={siteLogo} alt='logo' />
        </div>
        <div className={styles.footerLinks}>
            <p>bepleasuredbypinky@gmail.com</p>
            <a className={styles.link} href="https://wa.me/<2814994487>" target='_blank' rel="noreferrer"><BsWhatsapp className={`${styles.footerLogoApp} ${styles.log}`} /><p>WhatsApp</p></a>
            <a className={styles.link} href="http://www.facebook.com/pinky.maroya" target='_blank' rel="noreferrer"><RiFacebookCircleLine className={`${styles.footerLogoFb} ${styles.log}`} /><p>Facebook</p></a>
            <a className={styles.link} href="#" target='_blank' rel="noreferrer"><TiLocationOutline className={`${styles.footerLogoLoc} ${styles.log}`} /><p>Cape Town</p></a>
            <small>&copy; Copyright 2022, Be Pleasured By Pinky</small>
        </div>
        <div>
            <p>Yonela Johannes</p>
            <p>Full-Stack Web-Developer</p>
            <Image width={70} height={60} src={logo} alt='logo' />
        </div>
      </div>
  )
}
