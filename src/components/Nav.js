import React from 'react'
import styled from "styled-components";

const Nav = () => {
  return (
    <Navbar>
        <div className='nav_left'>
        <img src='./images/brand_logo.png' alt='brand logo'/>
        </div>
        <div className='nav_right'>
            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
            <button className='btn'>login</button>

      
    </Navbar>
  )
}

export default Nav

const Navbar = styled.div`
    display:flex;
    justify-content:space-between;
    text-align:center;
    align-items:center;
    margin:15px;
    .nav_right {
       display:flex;
       width:60%;
       justify-content:center;
       padding: 0 auto;
       align-items:center;
       text-align:center;
    }
    .nav_right ul{
        list-style:none;
        display:flex;
        gap:20px;
        font-size:16px;
        font-weight:600px
    }
    .nav_right ul li{
        cursor: pointer;

    }
    .nav_right ul li:hover{
        text-decoration:underline;
        text-decoration-color:var(--red)
    }
`
