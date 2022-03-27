import { StyledHeader } from './ui/StyledHeader';
import { HeaderSearchInput } from './HeaderSearchInput';
import { StyledIconButton } from './ui/StyledIconButton';
import { useState } from 'react';

export function HomeHeader() {
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <StyledHeader>
      <h1>Google Livros</h1>
      <StyledIconButton type="button" onClick={() => setShowSearchInput(true)}>
        <span>Buscar</span>
      </StyledIconButton>
      {showSearchInput && <HeaderSearchInput />}
    </StyledHeader>
  );
}
