import styled from 'styled-components';

export const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  box-sizing: border-box;
  display: ${(props) => props.display};
  padding: 0 5%;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.61);
  border: none;
`;
