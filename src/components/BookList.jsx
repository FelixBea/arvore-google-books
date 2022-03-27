import { StyledBookList } from './ui/StyledBookShelf';
import { BookItem } from './BookItem';

export default function BookList({ books, listStyle }) {
  return (
    <StyledBookList className={listStyle}>
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
