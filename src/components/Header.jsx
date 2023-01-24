import React, { useState } from 'react';
import Menu from '@components/Menu';
import '@styles/Header.scss'
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';


const Header = () => {

    const [toggle, setToggle] = useState(false);

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
                    <li className="navbar-shopping-cart">
                        <img src={iconShoppingCart} alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
            {toggle ? <Menu /> : null}
        </nav>

    );
}

export default Header;