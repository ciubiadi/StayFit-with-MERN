import './App.css';
import Users from './user/pages/Users';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import ProductList from './components/ProductList/ProductList';
import NewProduct from './components/NewProduct/NewProduct';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';

const PRODUCTS_LIST = [
  {id: 'p1', name: 'Book'},
  {id: 'p2', name: 'Pen'},
  {id: 'p3', name: 'Notebook'}
];

function App() {

  const [products, setProducts] = useState(PRODUCTS_LIST);

  const addNewProductHandler = (newProduct) => {
    setProducts(prevProducts => [
      ...prevProducts,
      newProduct
    ])
  }

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>
          <Route path="/products/new" exact>
            <NewProduct />
          </Route>
          {/* <Route path="/products">
            <div className="products">
              <h2>Course Goals</h2>
              <NewProduct onAddNewProduct={addNewProductHandler}/>
              <ProductList products={products} />
            </div>
          </Route> */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>

  );
}

export default App;
