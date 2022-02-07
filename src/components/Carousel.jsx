import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  overflow: hidden;
`;

function Carousel({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Carousel;
