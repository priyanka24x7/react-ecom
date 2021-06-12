import './App.scss';
import Header from './components/Header';
import ProductSearch from './components/ProductSearch';
import Navigation from './components/Navigation';
import ProductsContextProvider from './Global/ProductsContext';
import ProductList from './components/products/Product-list';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TestPage from './components/test';

function App() {
  return (
    <Router>
    <div className="App">
       <Switch>
          <Route exact path="/">
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
          </Route>
          <Route path="/test">
             <TestPage/>
          </Route>
       </Switch>
    </div>
 </Router>
  );
}

export default App;
