import React from "react";
import './NavButton.css'
import './TopBar.css'
import Logo from './Logo.js'
 
function TopBar()
{
    
    return (
        <div className="TopBar">
        <Logo></Logo>
            <ul style={{marginLeft:'100px',height:'60%',width:'fit-content'}}>
            <a className="NavButton" href="/products">Products</a>
            <a className="NavButton" href="/employee">Employee</a>
            <a className="NavButton" href="/reports">Reports</a>
             
        </ul>
        
        </div>);
}

export default TopBar;