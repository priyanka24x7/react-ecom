import './App.scss';
import Header from './components/Header';
import ProductSearch from './components/ProductSearch';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div class="banner">
        <ProductSearch></ProductSearch>
      </div>
    </div>
  );
}

export default App;
