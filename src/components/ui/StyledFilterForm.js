import styled from 'styled-components';

export const StyledFilterWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: #ffffff;
  .buttonArea {
    display: flex;
    justify-content: space-between;
  }
  form {
    fieldset {
      margin-top: 20px;
      legend,
      label {
        display: block;
        margin-top: 8px;
      }
    }
  }
`;
