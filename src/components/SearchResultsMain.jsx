import BookList from './BookList';
import { SearchResultsFilter } from './SearchResultsFilter';
import { StyledButton } from './ui/StyledButton';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export function SearchResultsMain() {
  const storeResults = useSelector((state) => state.books.books);
  const [bookSearchResults, setBookSearchResults] = useState(storeResults);
  const [showClearFilter, setShowClearFilter] = useState(false);
  const [showFilterForm, setShowFilterForm] = useState(false);

  const closeFilterForm = (filteredList) => {
    if (filteredList !== undefined) {
      setBookSearchResults(filteredList);
    }
    setShowClearFilter(true);
    setShowFilterForm(false);
  };

  const clearFilters = () => {
    setBookSearchResults(storeResults);
  };

  return (
    <main>
      {showFilterForm && (
        <SearchResultsFilter
          closeForm={closeFilterForm}
          initialList={bookSearchResults}
        />
      )}
      <section>
        <StyledButton
          className="primary"
          onClick={() => setShowFilterForm(true)}>
          <span className="fa-solid fa-filter fa-lg"></span>
          <span>Filtrar</span>
        </StyledButton>
        {showClearFilter && (
          <StyledButton className="secondary" onClick={clearFilters}>
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
