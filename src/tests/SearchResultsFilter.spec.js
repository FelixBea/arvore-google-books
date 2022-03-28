import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { SearchResultsFilter } from '../components/SearchResultsFilter';

describe('SearchResultsFilter', () => {
  const testList = [
    {
      saleInfo: { saleability: 'FOR_SALE', listPrice: { amount: 0 } },
      accessInfo: { epub: { isAvailable: true }, pdf: { isAvailable: false } }
    },
    {
      saleInfo: { saleability: 'NOT_FOR_SALE', listPrice: { amount: 31 } },
      accessInfo: { epub: { isAvailable: false }, pdf: { isAvailable: true } }
    },
    {
      saleInfo: { saleability: 'FOR_SALE', listPrice: { amount: 150 } },
      accessInfo: { epub: { isAvailable: true }, pdf: { isAvailable: true } }
    }
  ];

  it('filters search results by price', () => {
    const testCloseForm = jest.fn();

    render(
      <SearchResultsFilter initialList={testList} closeForm={testCloseForm} />
    );

    const radioOption = screen.getByText('de R$0 até R$30');
    fireEvent.click(radioOption);

    const filterButton = screen.getByText('Filtrar agora');
    fireEvent.click(filterButton);

    expect(testCloseForm).toHaveBeenCalledWith([testList[0]]);
  });

  it('filters search results by availability', () => {
    const testCloseForm = jest.fn();

    render(
      <SearchResultsFilter initialList={testList} closeForm={testCloseForm} />
    );

    const radioOption = screen.getByText('Disponível');
    fireEvent.click(radioOption);

    const filterButton = screen.getByText('Filtrar agora');
    fireEvent.click(filterButton);

    expect(testCloseForm).toHaveBeenCalledWith([testList[0], testList[2]]);
  });

  it('filters search results by format (pdf/epub)', () => {
    const testCloseForm = jest.fn();

    render(
      <SearchResultsFilter initialList={testList} closeForm={testCloseForm} />
    );

    const radioOption = screen.getByText('PDF');
    fireEvent.click(radioOption);

    const filterButton = screen.getByText('Filtrar agora');
    fireEvent.click(filterButton);

    expect(testCloseForm).toHaveBeenCalledWith([testList[1], testList[2]]);
  });
});
