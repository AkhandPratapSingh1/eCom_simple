import React from 'react';
import '../component/styles/nav.css';

const Navbar = ({size, setshow}) => {
  return (
    <nav>
        <div className="navigation-box">
            <span className="shop-name" onClick={()=>setshow(true)}>
                Akhand's Store
            </span>
            <div className="cart-icon" onClick={()=>setshow(false)}>
                <span>
                    <i className="fas fa-shopping-cart"></i>
                </span>
                <span className="cart-count">{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
