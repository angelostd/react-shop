import React, { useState, useContext } from 'react';
import Menu from '@components/Menu';
import MyOrder from '../containers/MyOrder';
import AppContext from '../context/AppContext';
import '@styles/Header.scss'
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state: { cart } } = useContext(AppContext);

    const handleToggle = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }

    return (
        <nav>
            <img src={iconMenu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furniture</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart"
                        onClick={() => setToggleOrders(!toggleOrders)}>
                        <img src={iconShoppingCart} alt="shopping cart" />
                        {cart.length > 0 ? <div>{cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle ? <Menu /> : null}
            {toggleOrders ? <MyOrder /> : null}
        </nav>

    );
}

export default Header;