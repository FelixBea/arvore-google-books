import { StyledBookItem } from './ui/StyledBookShelf';

export function BookItem(props) {
  return (
    <StyledBookItem>
      <figure>
        <img src={props.thumbnail} alt={props.altText} />
      </figure>
      <p>{props.title}</p>
    </StyledBookItem>
  );
}
