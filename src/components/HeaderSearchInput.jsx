import { StyledSearchInput } from './ui/StyledSearchInput';
import { StyledIconButton } from './ui/StyledIconButton';
import { useDispatch } from 'react-redux';
import { setSearchTerm, searchBooks } from '../store/reducers/books';
import { useNavigate } from 'react-router-dom';

export function HeaderSearchInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setSearch = ({ target }) => {
    dispatch(setSearchTerm(target.value));
  };

  const search = async () => {
    await dispatch(searchBooks()).unwrap();
    navigate('search-results');
  };

  return (
    <>
      <StyledSearchInput
        type="text"
        placeholder="Buscar por livros ou autores"
        onInput={setSearch}
      />
      <StyledIconButton type="button" onClick={search}>
        <span>Buscar</span>
      </StyledIconButton>
    </>
  );
}
