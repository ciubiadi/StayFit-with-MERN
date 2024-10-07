import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem'

const ProductList = ({ products }) => { 
    return (
        <ul className="product-list">
            { products.map(product => <ProductItem product={product.name} key={product.id} />) }
        </ul>
    );
}

export default ProductList;