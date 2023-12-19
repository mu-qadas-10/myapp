import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const Navbar = ({setIsloged}) => {
  const getdata = useSelector((state)=>state.cartReducer);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertairy fixed">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"><h3><img src='/pictures/download.png' className='img' alt=''></img></h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          < Link className="nav-link active" to="/about">Men</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" to="/product">Women</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/search">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/online">Online</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/shoppingcart"></Link>
        </li>
      </ul>
      <Link to="/shoppingcart"><Badge badgeContent={getdata.length} color="primary">
      <ShoppingCartIcon color="action"/>
    </Badge></Link>
        <button onClick={()=>setIsloged(true)} className='btn btn-dark mx-3'>Login</button>
        <button onClick={()=>setIsloged(false)} className='btn btn-dark'>Logout</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
