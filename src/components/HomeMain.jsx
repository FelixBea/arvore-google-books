import { BookShelf } from './BookShelf';
import { bookshelves } from '../constants/bookshelves';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchParameters } from '../store/reducers/books';
import { searchHomeBookshelves } from '../store/reducers/books';

export function HomeMain() {
  const dispatch = useDispatch();
  const storeSearchParameters = useSelector(
    (state) => state.books.searchParameters
  );

  const searchBookshelf = async (homeBookshelfKey) => {
    const searchParameters = {
      ...storeSearchParameters,
      q: homeBookshelfKey
    };

    dispatch(setSearchParameters(searchParameters));
    await dispatch(searchHomeBookshelves(searchParameters));
  };

  const searchAllBookshelves = async () => {
    await searchBookshelf('acao');
    await searchBookshelf('aventura');
    await searchBookshelf('destaques');
    await searchBookshelf('infantil');
  };

  useEffect(async () => {
    await searchAllBookshelves();
  }, [dispatch]);

  return (
    <main>
      {bookshelves.map((bookshelf, index) => (
        <BookShelf bookshelf={bookshelf} key={index} />
      ))}
    </main>
  );
}
