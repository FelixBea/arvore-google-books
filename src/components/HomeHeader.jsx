import { StyledHeader } from './ui/StyledHeader';
import { StyledSearchInput } from './ui/StyledSearchInput';
import { StyledIconButton } from './ui/StyledIconButton';
import { useState } from 'react';

export function HomeHeader() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const toggleSearch = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <StyledHeader>
      <h1>Google Livros</h1>
      <StyledIconButton type="button" onClick={toggleSearch}>
        <span>Buscar</span>
      </StyledIconButton>
      {showSearchInput && (
        <StyledSearchInput
          type="text"
          placeholder="Buscar por livros ou autores"
        />
      )}
    </StyledHeader>
  );
}
