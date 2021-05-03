import React from "react";
import logo from './logo.svg';
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider";
import { auth } from './firebase'


function Header() {

    const [{basket, loggedInUser}, dispatch] = useStateValue();

    const logOutUser = () => {
        if(loggedInUser){
            auth.signOut();
        }
    }

    return(
        <nav className="header">
            <img className="header__logo" src={logo} alt="ecomlogo"/>
            <div className="header__serach_form">
                <input type="text" className="header_search_input" />
                <SearchIcon className="header__icon_search"/>
            </div>
            <div className="header__navigation">
                {/* Primary Link */}
                <Link to={!loggedInUser && "/login"} className="header__link">
                    <div onClick={logOutUser} className="header__options">
                        <span className="header__option_span_one">Hello {loggedInUser?.email}</span>
                        <span className="header__option_span_two">{loggedInUser ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                {/* Secondary Link */}
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__option_span_one">Returns</span>
                        <span className="header__option_span_two">& Orders</span>
                    </div>
                </Link>
            </div>
            <Link to="/checkout" className="header__link">
                <div className="header__cart">
                    <ShoppingBasketIcon/>
                    <span className="header__option_span_two header__cart_item_count">{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header;