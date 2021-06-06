import './App.scss';
import Header from './components/Header';
import ProductSearch from './components/ProductSearch';
import Navigation from './components/Navigation';
import ProductsContextProvider from './Global/ProductsContext';
import ProductList from './components/products/Product-list';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <div className="banner">
        <ProductSearch/>
      </div>
      <div className="container">
        <ProductsContextProvider>
          <ProductList/>
        </ProductsContextProvider>
      </div>
    </div>
  );
}

export default App;
