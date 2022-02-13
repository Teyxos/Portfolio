import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Carousel({ children }) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    overflow: hidden;
    margin-left: -0px;
  `;
  return <Wrapper>{children}</Wrapper>;
}

export default Carousel;
