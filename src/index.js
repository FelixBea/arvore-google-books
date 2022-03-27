import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import Home from './routes/Home';
import SearchResults from './routes/SearchResults';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
