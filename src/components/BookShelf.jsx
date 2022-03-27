import BookList from './BookList';
import { StyledBookShelf, StyledBookshelfTitle } from './ui/StyledBookShelf';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export function BookShelf({ bookshelf }) {
  const homeBookshelves = useSelector((state) => state.books.homeBookshelves);

  return (
    <StyledBookShelf
      bgColor={bookshelf.backgroundColor}
      color={bookshelf.color}>
      <StyledBookshelfTitle>{bookshelf.title}</StyledBookshelfTitle>
      <BookList books={homeBookshelves[bookshelf.homeBookshelfKey]} />
    </StyledBookShelf>
  );
}
