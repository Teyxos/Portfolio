import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../contexts/ThemeContext';

import styled from 'styled-components';

function Navbar() {
  const theme = useContext(ThemeContext);
  const NavWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 1em;
    background-color: ${theme.background_color
      ? theme.background_color
      : '#191a21'};
    padding: 2em;
    font-size: 20px;

    > li {
      list-style-type: none;

      > a {
        color: ${theme.color ? theme.color : '#f8f8f8'};
        text-decoration: none;
        transition: 0.5s transform;

        &:hover {
          color: #50fa7b;
          transform: scale(1.2);
        }
      }
    }
  `;

  return (
    <>
      <NavWrapper style={{ theme }}>
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
      </NavWrapper>
    </>
  );
}

export default Navbar;
