import { FaUsers } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import styles from '../../styles/Sidebar.module.css'
import { RiProductHuntLine } from "react-icons/ri";
import { BsShopWindow } from "react-icons/bs";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebarWrapper}>
            <div className={styles.sidebarMenu}>
                <h3 className={styles.sidebarTitle}>Dashboard</h3>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarListItem}>
                        <GrTransaction className={styles.sidebarIcon} />Transactions Details
                    </li>
                    <li className={styles.sidebarListItem}>
                        <BsShopWindow className={styles.sidebarIcon} />All Products
                    </li>
                    <li className={styles.sidebarListItem}>
                        <RiProductHuntLine className={styles.sidebarIcon} />Add Products
                    </li>
                    <li className={styles.sidebarListItem}>
                        <FaUsers className={styles.sidebarIcon} />Users
                    </li>
                </ul>
            </div>
            <hr></hr>
            <div className={styles.sidebarMenu}>
                <h3 className={styles.sidebarTitle}>Staff</h3>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarListItem}>
                        <RiAdminFill />Staff
                    </li>
                </ul>
            </div>
            <hr></hr>
        </div>
    </div>
  )
}
