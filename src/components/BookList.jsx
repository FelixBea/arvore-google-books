import { StyledBookList } from './ui/StyledBookShelf';
import { BookItem } from './BookItem';

export default function BookList({ books }) {
  return (
    <StyledBookList>
      {books.map((book, index) => (
        <BookItem
          title={book.volumeInfo.title}
          thumbnail={book.volumeInfo.imageLinks?.smallThumbnail}
          key={index}
        />
      ))}
    </StyledBookList>
  );
}
