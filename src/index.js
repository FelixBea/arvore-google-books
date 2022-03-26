import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import Home from './routes/Home'
import ResultadoBusca from './routes/ResultadoBusca'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/resultado-busca' element={<ResultadoBusca />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
