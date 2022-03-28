import { StyledHeader } from './ui/StyledHeader';
import { Link } from 'react-router-dom';

export function SearchResultsHeader() {
  return (
    <StyledHeader>
      <Link to={'..'}>
        <span className="fa-solid fa-chevron-left fa-lg"></span>
      </Link>
      <h1>Resultado de busca</h1>
    </StyledHeader>
  );
}
