import React, { useState,useContext, useEffect } from "react";
import './navbar.css';
import CartContext from "../../store/CartContext";
import { Link , useNavigate } from 'react-router-dom';
import AuthContext from "../../store/AuthContext";

export const NavBar = () =>{
    const AuthCtx = useContext(AuthContext);
    const CartCtx = useContext(CartContext);
    const navigate = useNavigate();
    const [noOfItems,setNoOfItmes] = useState(0);
    useEffect(()=>{
        setNoOfItmes(CartCtx.cartItems.length)
    },[CartCtx.cartItems]);
    const onLogOutHandler = () =>{
        AuthCtx.setIsLoggedIn(false);
        navigate('/admin/login');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <div class="topnav-centered">
                <a href="#home" className="navbar-brand text-white">𝙎𝙝𝙤𝙥𝙥𝙞𝙣𝙜 𝙈𝙖𝙧𝙩</a>
            </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
                <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
                {!AuthCtx.isLoggedIn ? <Link className="nav-link text-white" to="/admin/login">Login</Link>:
                 !localStorage.getItem('token') ? <Link className="nav-link" to="/admin/login">Login</Link>:
                <a className="nav-link text-white" onClick={onLogOutHandler}>Logout</a>
                }
            </li>
            </ul>
            <div className="p-4">
                <div className="row">
                    <div className="unique text-white">
                        {noOfItems}
                    </div>
                    <div className="col-md-8">
                        <Link to='/cart'>
                            <img src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg" className="cart-img"/>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    );
}