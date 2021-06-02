import './App.scss';
import Header from './components/Header';
import ProductSearch from './components/ProductSearch';
import ProductList from './components/products/Product-list';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <div class="banner">
        <ProductSearch></ProductSearch>
      </div>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
