import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  }
  const handleProfileClick=()=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const navigate = useNavigate();

  useEffect(() => {
    // verify user from backend (auth route POST '/')
    const fetchUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002/",
          {},
          { withCredentials: true }
        );
        if (data && data.status && data.user) {
          setUser(data.user);
        }
      } catch (err) {
        console.error("Failed to fetch user:", err.message || err);
      }
    };
    fetchUser();
  }, []);

  const menuClass="menu";
  const selectedMenuClass="menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
          <Link style={{textDecoration:"none"}} to='/' onClick={()=>{handleMenuClick(0)}}>
            <p className={selectedMenu===0?selectedMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/orders' onClick={()=>{handleMenuClick(1)}}>
            <p className={selectedMenu===1?selectedMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/holdings' onClick={()=>{handleMenuClick(2)}}>
            <p className={selectedMenu===2?selectedMenuClass:menuClass} >Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/positions' onClick={()=>{handleMenuClick(3)}}>
            <p>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/funds' onClick={()=>{handleMenuClick(4)}}>
            <p className={selectedMenu===4?selectedMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/apps' onClick={()=>{handleMenuClick(5)}}>
            <p  className={selectedMenu===5?selectedMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{user ? user.username.substring(0,2).toUpperCase() : "ZU"}</div>
          <p className="username">{user ? user.username : "USERID"}</p>
        </div>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <div className="profile-header">
              <div className="avatar large">{user ? user.username.substring(0,2).toUpperCase() : "ZU"}</div>
              <div className="profile-info">
                <strong>{user ? user.username : "User"}</strong>
                <small className="email">{user ? user.email : "user@example.com"}</small>
              </div>
            </div>
            <hr />
            <Link to="/profile" className="dropdown-item">View Profile</Link>
            <button className="dropdown-item logout" >Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
