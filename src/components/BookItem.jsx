import {
  StyledBookItem,
  StyledBookThumbnailImg,
  StyledBookTitle
} from './ui/StyledBookShelf';

export function BookItem(props) {
  return (
    <StyledBookItem>
      <StyledBookThumbnailImg src={props.thumbnail} alt={props.altText} />
      <StyledBookTitle>{props.title}</StyledBookTitle>
    </StyledBookItem>
  );
}
