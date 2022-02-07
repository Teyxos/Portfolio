import styled from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';

function ProjectCard({ props }) {
  const Body = styled.div`
    display: inline-flex;
    flex-flow: row nowrap;
    background-color: #f8f8f8;
    height: 300px;
    width: 500px;
    min-width: 500px;
    min-height: 300px;
    margin: 1em 1.5em;
    border-radius: 12px;
    color: black;
  `;

  return (
    <>
      <Body>
        <h1>{props}</h1>
      </Body>
    </>
  );
}

export default ProjectCard;
