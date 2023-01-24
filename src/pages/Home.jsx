import React from 'react';
import ProductList from "@containers/ProductList";
import Header from "@components/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <ProductList />
        </div>
    );
}

export default Home;