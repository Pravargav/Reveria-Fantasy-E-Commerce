import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Asssets/logo.png';
import cart_icon from '../Asssets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <Link to={'/'} style={{textDecoration:'none', color:'black'}}><p>Reveria</p></Link>
      </div>
      <ul className="nav-menu">   
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration:'none', color:'black'}} to={'/'}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration:'none',color:'black'}} to={'/mens'}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration:'none', color:'black'}} to={'/womens'}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration:'none', color:'black'}} to={'/kids'}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link style={{textDecoration:'none', color:'black'}} to={'/login'}><button>Login</button></Link>}
        <a href="https://tourism-website-five.vercel.app/"><button>Sell</button></a>
        <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;
