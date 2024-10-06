import './App.css';
import ProductList from './components/ProductList/ProductList';

function App() {
  const products = [
    {id: 'p1', name: 'Book'},
    {id: 'p2', name: 'Pen'},
    {id: 'p3', name: 'Notebook'}
  ]

  return (<div className="products">
    <h2>Course Goals</h2>
    <ProductList products={products}/>
  </div>)
}

export default App;
