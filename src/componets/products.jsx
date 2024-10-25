import React, { useEffect, useState } from 'react';
import Product from './product';
import './stlye-components/products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/products.json'); // Cargar desde 'public'
            const data = await response.json(); // Convierte la respuesta en un objeto JS
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <div className='header-section'>
                <h1 className='title-page-products'>Descubre Nuestros Productos</h1>
                <p className='subtitle-page-products'>
                    Encuentra las mejores ofertas y productos de calidad.
                </p>
            </div>
            <section className='productpage'>
            {products.length > 0 ? (
                    products.map(product => (
                        <Product key={product.id} {...product} />
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </section>
            

        </>
    );
};

export default Products;
