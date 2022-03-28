import { useState } from 'react';
import { StyledFilterWrapper } from './ui/StyledFilterForm';

export function SearchResultsFilter({ initialList, closeForm }) {
  const [compare, setCompare] = useState(null);
  const [format, setFormat] = useState(null);
  const [availability, setAvailability] = useState(null);

  const priceFilters = {
    upTo30: (price) => price <= 30,
    upTo50: (price) => price <= 50 && price > 30,
    upTo100: (price) => price <= 100 && price > 50,
    moreThan100: (price) => price > 100
  };

  const byFormat = (item) => {
    if (!format) {
      return true;
    }
    return item.accessInfo[format].isAvailable;
  };
  const byPrice = (item) => {
    if (!compare) {
      return true;
    }
    return (
      item.saleInfo.saleability === 'FOR_SALE' &&
      priceFilters[compare](item.saleInfo.listPrice.amount)
    );
  };
  const byAvailability = (item) => {
    if (!availability) {
      return true;
    }
    return item.saleInfo.saleability === availability;
  };

  const filterResults = (e) => {
    e.preventDefault();
    const result = initialList
      .filter(byPrice)
      .filter(byFormat)
      .filter(byAvailability);
    closeForm(result);
  };

  const close = () => {
    closeForm();
  };

  const setFormPrice = (e) => setCompare(e.target.value);
  const setFormAvailability = (e) => setAvailability(e.target.value);
  const setFormFormat = (e) => setFormat(e.target.value);

  return (
    <StyledFilterWrapper>
      <div>
        <h2>Filtrar</h2>
        <button onClick={close}>
          <span className="fa-solid fa-times fa-lg"></span>
        </button>
      </div>
      <form onSubmit={filterResults}>
        <fieldset>
          <legend>Preço</legend>
          <label htmlFor="30">
            <input
              type="radio"
              id="30"
              name="preco"
              value="upTo30"
              onChange={setFormPrice}
            />
            de R$0 até R$30
          </label>
          <label htmlFor="30to50">
            <input
              type="radio"
              id="30to50"
              name="preco"
              value="upTo50"
              onChange={setFormPrice}
            />
            de R$31 até R$50
          </label>
          <label htmlFor="50to100">
            <input
              type="radio"
              id="50to100"
              name="preco"
              value="upTo100"
              onChange={setFormPrice}
            />
            de R$51 até R$100
          </label>
          <label htmlFor="morethan100">
            <input
              type="radio"
              id="morethan100"
              name="preco"
              value="moreThan100"
              onChange={setFormPrice}
            />
            Mais de R$100
          </label>
        </fieldset>
        <fieldset>
          <legend>Disponibilidade para venda</legend>
          <label htmlFor="FOR_SALE">
            <input
              type="radio"
              id="FOR_SALE"
              name="availability"
              value="FOR_SALE"
              onChange={setFormAvailability}
            />
            Disponível
          </label>
          <label htmlFor="NOT_FOR_SALE">
            <input
              type="radio"
              id="NOT_FOR_SALE"
              name="availability"
              value="NOT_FOR_SALE"
              onChange={setFormAvailability}
            />
            Indisponível
          </label>
        </fieldset>
        <fieldset>
          <legend>Formatos disponíveis</legend>
          <label htmlFor="epub">
            <input
              type="radio"
              id="epub"
              name="format"
              value="epub"
              onChange={setFormFormat}
            />
            E-pub
          </label>
          <label htmlFor="pdf">
            <input
              type="radio"
              id="pdf"
              name="format"
              value="pdf"
              onChange={setFormFormat}
            />
            PDF
          </label>
        </fieldset>
        <button type="submit">Filtrar resultados</button>
      </form>
    </StyledFilterWrapper>
  );
}
