import BookList from './BookList';
import { StyledButton } from './ui/StyledButton';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export function SearchResultsMain() {
  const storeResults = useSelector((state) => state.books.books);
  const [bookSearchResults, setBookSearchResults] = useState(storeResults);
  // eslint-disable-next-line no-unused-vars
  const [showClearFilter, setShowClearFilter] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const filterResults = () => {
    setBookSearchResults(bookSearchResults.map((book) => book));
  };

  return (
    <main>
      <section>
        <StyledButton className="primary">
          <span className="fa-solid fa-filter fa-lg"></span>
          <span>Filtrar</span>
        </StyledButton>
        {showClearFilter && (
          <StyledButton className="secondary">
            <span>Limpar</span>
            <span className="fa-solid fa-times fa-lg"></span>
          </StyledButton>
        )}
      </section>
      <section>
        <BookList books={bookSearchResults} listStyle="search-results" />
      </section>
    </main>
  );
}
