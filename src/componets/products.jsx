import React, { useEffect, useState } from 'react';
import Product from './product';
import './stlye-components/products.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig'; // Importa la referencia a Firestore

const Products = () => {
    const [products, setProducts] = useState([]);
    const [text, setText] = useState(""); // Cambiado a string vacío

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Obtener documentos de Firestore
                const querySnapshot = await getDocs(collection(db, 'products'));
                const productsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(productsData);
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            }
        };
   

        fetchProducts();
    }, []);

    // Filtrar productos según el texto de búsqueda
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(text)
    );

    return (
        <>
            <div className='header-section'>
                <h1 className='title-page-products'>Descubre Nuestros Productos</h1>
                <p className='subtitle-page-products'>
                    Encuentra las mejores ofertas y productos de calidad.
                </p>
            </div>

            <div className='search-container'>
                <input
                    type="text"
                    name="busqueda"
                    placeholder="Buscar productos..."
                    className="search-input"
                    onChange={(e) => setText(e.target.value.toLowerCase())}
                />
            </div>

            <section className="productpage">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => <Product key={product.id} {...product} />)
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </section>
        </>
    );
};

export default Products;
