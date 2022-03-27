import BookList from './BookList';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { useState } from 'react';

export function SearchResultsMain() {
  const storeResults = useSelector((state) => state.books.books);
  const [bookSearchResults, setBookSearchResults] = useState(storeResults);
  // eslint-disable-next-line no-unused-vars
  const filterResults = () => {
    setBookSearchResults(bookSearchResults.map((book) => book));
  };

  return (
    <main>
      <section>
        <BookList books={bookSearchResults} listStyle="search-results" />
      </section>
    </main>
  );
}
