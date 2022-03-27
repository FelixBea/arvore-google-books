import { StyledSearchInput } from './ui/StyledSearchInput';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/reducers/books';

export function HeaderSearchInput() {
  const dispatch = useDispatch();
  const setSearch = ({ target }) => {
    dispatch(setSearchTerm(target.value));
  };

  return (
    <StyledSearchInput
      type="text"
      placeholder="Buscar por livros ou autores"
      onInput={setSearch}
    />
  );
}
