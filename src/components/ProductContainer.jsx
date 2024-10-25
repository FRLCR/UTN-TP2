import React from "react";
import Product from "./Product";
import './ProductContainer.css'

const MAX_RENDER = 6;
function ProductContainer({ products }) {

    return (
        <>
            <div className='product-container'>
                <div className='containerTitle'>
                    <h1>Listado de productos</h1>
                </div>
                <div className="product-list">
                    {products && products.length > 0 ? ( 
                        products.slice(0, MAX_RENDER).map(product => (
                            <Product key={product.id} id={product.id} name={product.title} price={product.price} description={product.description} image={product.image} />
                        ))
                    ) : (
                        <div>
                            <p>No hay productos</p>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default ProductContainer;