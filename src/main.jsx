import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  unstable_HistoryRouter as HistoryRouter ,
} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import LoginModel from './components/RegisterModal';

export const history = createBrowserHistory({ window });

ReactDOM.createRoot(document.getElementById('root')).render(
  <HistoryRouter history={history}>
    <App />
  </HistoryRouter>
)

