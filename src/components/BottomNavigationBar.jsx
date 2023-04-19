import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaStore, FaUser, FaDropbox } from 'react-icons/fa';

function BottomNavigationBar() {
  return (
    <nav className="w-full flex items-center fixed bottom-0 bg-white py-1 mx-auto">
      <ul className="flex-initial justify-around items-center flex flex-row w-full px-4" style={{alignItems: 'center'}}>
      <li className="px-0">
  <Link to="/" className="nav-link">
    <FaHome />
    <span>Home</span>
  </Link>
</li>
<li className="px-0">
  <Link to="/drops" className="nav-link">
    <FaDropbox />
    <span>Drops</span>
  </Link>
</li>
<li className="px-0">
  <Link to="/store" className="nav-link">
    <FaStore />
    <span>Store</span>
  </Link>
</li>
<li className="px-0">
  <Link to="/market" className="nav-link">
    <FaShoppingCart />
    <span>Market</span>
  </Link>
</li>
<li className="px-0">
  <Link to="/mypage" className="nav-link">
    <FaUser />
    <span>My Page</span>
  </Link>
</li>
      </ul>
    </nav>
  );
}

export default BottomNavigationBar;
