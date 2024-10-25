import './stlye-components/product.css'
import { useNavigate } from 'react-router-dom';

function Product({ id,name, price, image, shortDescription}) {//
    const navigate = useNavigate();
    const handleBuy = () => {navigate(`/product/${id}`)}
        // Navegar a una nueva ruta, por ejemplo, la página de detalles del producto
        
    return (
        <div  className="product-card">
            <div className='container-image'>
                <img className="product-image" alt={name} src={image}/>
            </div>
            <h3 className="product-name">{name}</h3>
            <p className="product-description">{shortDescription}</p>
            <p className="product-price">${price}</p>
            <button className="add-to-cart" onClick={handleBuy}>Comprar</button>
        </div>
    )

}
export  default Product