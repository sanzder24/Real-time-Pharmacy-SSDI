import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "./stateProvider";
import { auth } from "firebase";
import * as firebase from 'firebase';
function Header() {
    const[{basket, user}] = useStateValue();
    console.log(user);

    const login = () => {
        if (user) {
            try {

                 firebase.auth().signOut();
                console.log('signed out');
          
              } catch (error) {
                console.log(error);
              }
        }
      };

    return <nav className="header">
        <Link to="/">
        <img className="header__logo" src="https://user-images.githubusercontent.com/54637394/115992773-72d5e100-a59d-11eb-97e6-7891a6740042.png" alt="" ></img>
        </Link>
        <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
        <Link to= {!user && "/login"} className="header__link">
          <div className="header__option" onClick={login}>
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne" >Return</span>
            <span className="header__optionLineTwo">& Orders</span>
            </div>
        </Link>
        <Link className="header__link">
            <div className="header__option">
    
            </div>
        </Link>
        <Link to="/checkout" className="header__link" >
            <div className="header__optionBasket">
            <ShoppingBasketIcon />
             <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
            
        </Link>
        </div>
       


    </nav>
}
export default Header
