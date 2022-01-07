import { Link } from 'react-router-dom';

function Navbar({ active }) {
  return (
    <>
      <div className='navbar'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>text in here</li>
      </div>
    </>
  );
}

export default Navbar;
