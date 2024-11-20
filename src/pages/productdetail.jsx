import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Asegúrate de que esta ruta sea correcta
import './productDetail.css';

const ProductDetail = () => {
    const { id } = useParams(); // Obtenemos el ID desde la URL
    const [product, setProduct] = useState(null);
    const handlePurchase = () => {
        alert(`¡Has agregado "${product.name}" al carrito!`);
    }

    useEffect(() => {
        const fetchProduct = async () => {
            const productRef = doc(db, 'products', id); // Referencia al documento en Firestore
            const productSnap = await getDoc(productRef); // Obtener el documento

            if (productSnap.exists()) {
                setProduct(productSnap.data()); // Establecer los datos del producto
            } else {
                console.log('Producto no encontrado');
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Cargando producto...</p>;
    }

    return (
        <div className="product-detail">
            <h1 className="product-detail-title">{product.name}</h1>
            <div className="product-detail-info">
                <img className="product-detail-image" src={product.image} alt={product.name} />
                <div className="product-detail-content">
                    <p className="product-detail-price">${product.price}</p>
                    <p className="product-detail-description">{product.longDescription}</p>
                    
                    <button className="product-buy-button" onClick={handlePurchase}>
                        Comprar
                    </button>
                </div>
            </div>

            <div className="product-detail-gallery">
                <img key={product.id} src={product.image} alt={product.name} className='product-additional-image'/>
                <div className="product-detail-images">
                    {/* Aquí podrías agregar más imágenes si tu producto las tiene */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
