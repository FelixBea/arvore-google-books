import styled from 'styled-components';

export const StyledBookShelf = styled.section`
  height: 264px;
  width: 100%;
  padding: 32px 20px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-family: 'Roboto', sans-serif;
`;

export const StyledBookshelfTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
`;

export const StyledBookList = styled.ul`
  width: ${(props) => props.width || 'auto'};
  height: calc(100% - 60px);
  overflow-x: ${(props) => props.overflow || 'auto'};
  overflow-y: hidden;
  margin-top: 20px;
  display: flex;
  flex-flow: row ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  column-gap: 20px;
`;

export const StyledBookItem = styled.li`
  width: 94px;
  height: 138px;
  flex: 0 0 auto;
`;

export const StyledBookTitle = styled.p`
  max-height: 36px;
  line-height: 18px;
  margin-top: 12px;
  text-overflow: ellipsis;
  font-size: 12px;
`;

export const StyledBookThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 10px 10px 0;
  overflow: hidden;
`;
