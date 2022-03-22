import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Home from './routes/Home';
import ResultadoBusca from './routes/ResultadoBusca';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />} >
        <Route path="/" element={<Home />} />
        <Route path="/resultado-busca" element={<ResultadoBusca />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
