import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ItemListProvider } from './context/ItemListContext.jsx';
import { ProductsProvider } from './context/ProductsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ItemListProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </ItemListProvider>
    </React.StrictMode>
  </BrowserRouter>
)
