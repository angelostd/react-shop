import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';
import { UNSAFE_getPathContributingMatches } from '@remix-run/router';


const MyOrder = () => {
    const { state: { cart } } = useContext(AppContext);
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);

        return sum;
    }

    return (
        <aside className="MyOrder">
            <div className="title-container">
                <img src={flechita} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {cart.map(product => (
                    <OrderItem product={product} key={`orderItem-${product.id}`} />
                ))}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
}

export default MyOrder;
