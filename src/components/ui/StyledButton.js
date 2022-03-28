import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 92px;
  height: 32px;
  border: none;
  border-radius: 16px;
  padding: 8px 16px;
  margin-top: 12px;
  text-align: center;
  &.primary {
    background-color: #56c8ff;
    color: #ffffff;
  }
  &.secondary {
    background-color: #effaff;
    color: #595a5c;
  }
  span:nth-child(2) {
    margin-left: 4px;
  }
`;
