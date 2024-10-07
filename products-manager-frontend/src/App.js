import './App.css';
import ProductList from './components/ProductList/ProductList';
import NewProduct from './components/NewProduct/NewProduct';
import { useState } from 'react';

const PRODUCTS_LIST = [
  {id: 'p1', name: 'Book'},
  {id: 'p2', name: 'Pen'},
  {id: 'p3', name: 'Notebook'}
];

function App() {

  const [products, setProducts] = useState(PRODUCTS_LIST);

  const addNewProductHandler = (newProduct) => {
    // products.push(newProduct);
    // console.log('products: ', products);
    // setProducts(products.concat(newProduct));
    setProducts(prevProducts => [
      ...prevProducts,
      newProduct
    ])
  }

  return (
    <div className="products">
      <h2>Course Goals</h2>
      <NewProduct onAddNewProduct={addNewProductHandler}/>
      <ProductList products={products} />
    </div>
  );
}

export default App;
