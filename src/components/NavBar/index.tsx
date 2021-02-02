// import {useState} from 'react'

import styles from './index.module.scss'
import appStyles from '../../App.module.scss'

import {
    Link
  } from "react-router-dom";

export default function NavBar() {
    // TODO set state for active
    // let [popoverState, setPopoverState] = useState({Code: false, })
    return ( <div className={styles.NavBar}>
        <div className={appStyles.container}>
            <Link className={styles.NavBarHome} to="/">
                <h1>FinanceManager</h1>
            </Link>
        <ul className={styles.NavBarList}>
            <li className={styles.NavBarItem}>
                <Link to='/accounts' className={styles.NavBarLink}>Accounts</Link>
            </li>
            <li className={styles.NavBarItem}>
                <Link to='/manage' className={styles.NavBarLink}>Manage</Link>
            </li>
          <li className={styles.NavBarItem}>
            <Link to='/settings' className={styles.NavBarLink}>Settings</Link>
            {/* <div id="moreNavPopover" className={styles.Popover}>
              <ul className={styles.PopoverList}>
                <li className={styles.PopoverItem}>
                  <a className={styles.PopoverLink} href="https://github.com/dhg/Skeleton">On Github</a>
                </li>
                <li className={styles.PopoverItem}>
                  <a className={styles.PopoverLink} href="https://github.com/dhg/Skeleton#browser-support">Browsers</a>
                </li>
                <li className={styles.PopoverItem}>
                  <a className={styles.PopoverLink} href="https://github.com/dhg/Skeleton#license">License</a>
                </li>
                <li className={styles.PopoverItem}>
                  <a className={styles.PopoverLink} href="https://github.com/dhg/Skeleton#extensions">Extensions</a>
                </li>
                <li className={styles.PopoverItem}>
                  <a className={styles.PopoverLink} href="https://github.com/dhg/Skeleton/releases">Versions</a>
                </li>
                <li className={styles.PopoverItem}>
                  <a className={styles.PopoverLink} href="https://github.com/dhg/Skeleton#colophon">Colophon</a>
                </li>
              </ul>
            </div> */}
          </li>
        </ul>
        </div>
      </div>)
}