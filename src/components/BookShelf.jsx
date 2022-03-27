import BookList from './BookList';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export function BookShelf({ title, homeBookshelfKey }) {
  const homeBookshelves = useSelector((state) => state.books.homeBookshelves);

  return (
    <section>
      <h2>{title}</h2>
      <BookList books={homeBookshelves[homeBookshelfKey]} />
    </section>
  );
}
