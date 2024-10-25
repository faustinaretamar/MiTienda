import './products.css';
import data from "./data/products.json"; // Importa el JSON estático

const Products = () => {
    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {data.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
