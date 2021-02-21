import React from 'react'
import { useQuery } from 'react-query'

const Product = () => {
    const productURL = 'https://fakestoreapi.com/products';
    const getProducts = async () => {
        const response = await fetch(productURL);
        const json = await response.json();
        return json;
    }

    const { data, isLoading, error } = useQuery('products', getProducts);

    if (isLoading) {
        return (
            <div className="app-loading">
                <span>Loading...</span>
            </div>
        )
    }
    if (error) {
        return (
            <div className="app-loading">
                <span>Load Error</span>
            </div>
        )
    }

    return (
        <div>
            { data?.map(product => (
                <div key={product.id}>
                    <p>
                        {product.title}
                    </p>
                    <p>
                        $ {product.price}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Product