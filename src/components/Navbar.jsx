import { Link } from 'react-router-dom';

import styles from '../scss/Navbar.module.scss';

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <a href='https://github.com/Teyxos' target='_blank'>
            Github
          </a>
        </li>
      </div>
    </>
  );
}

export default Navbar;
