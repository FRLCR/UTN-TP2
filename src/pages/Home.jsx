import React from "react";
import { useEffect, useState } from 'react';
import ProductContainer from "../components/ProductContainer";

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los productos');
            }
            return response.json();
        })
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
}, []);

    if (loading) {
      return <div>Cargando productos...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }


    return (
        <>
            <ProductContainer products={products}/>
        </>
    )
}

export default Home;