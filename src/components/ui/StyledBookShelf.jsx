import styled from 'styled-components';

export const StyledBookShelf = styled.section`
  height: fit-content;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;

export const StyledBookshelfTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
`;

// export const StyledBookList = styled.ul`
//   width: ${(props) => props.width || 'auto'};
//   height: ${(prop) => prop.height || 'calc(100% - 60px)'};
//   overflow-x: auto;
//   overflow-y: hidden;
//   margin-top: 20px;
//   display: flex;
//   flex-flow: row ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
//   column-gap: ${(props) => props.columnGap || '20px'};
//   row-gap: ${(props) => props.rowGap || 'none'};
// `;

export const StyledBookList = styled.ul`
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 20px;
  display: flex;
  &.home {
    width: auto;
    height: fit-content;
    flex-flow: row nowrap;
    column-gap: 20px;
  }
  &.search-results {
    width: 100%;
    flex-flow: row wrap;
    column-gap: 8px;
    row-gap: 20px;
  }
`;

export const StyledBookItem = styled.li`
  width: 94px;
  height: fit-content;
  flex: 0 0 auto;
`;

export const StyledBookTitle = styled.p`
  max-height: 36px;
  line-height: 18px;
  margin-top: 12px;
  overflow-y: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
`;

export const StyledBookThumbnailImg = styled.img`
  width: 100%;
  height: 138px;
  border-radius: 0 10px 10px 0;
  overflow: hidden;
`;
