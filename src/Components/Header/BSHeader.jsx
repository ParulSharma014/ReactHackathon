import React from 'react'
import { Link } from 'react-router-dom'
import './BSHeader.css'
import { useNavigate } from "react-router-dom";

export default function Header() {

    const username = JSON.parse(localStorage.getItem('userName'));
  // console.log(username)

  const navigate = useNavigate();

  function logout() {
    // localStorage.removeItem('jwt_token');
    // localStorage.clear();    // it will clear all tokens
    localStorage.removeItem('jwt_token');
    navigate("/registraion")
  }


  return (
    <div>
        
        <nav class="navbar navbar-expand-lg bg-light user-navbar fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand img-fluid" href="/"><img src="./assets/nwlogo.png" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse user-navbar-navbtn" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        {
              localStorage.getItem('jwt_token') ?
                <>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/contactus">Contact us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/aboutus">About us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/services">Services</Link>
                        </li>

                        </>

                :
                <>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/signup">Sign Up</Link>
                        </li>
                        </>
}
                    </ul>
                

            {localStorage.getItem('jwt_token') ?
        <div class="dropdown">
          <button class="btn dropdown-toggle" id="user-details-on-header" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Welcome:{username.firstname} {username.lastname}
          </button>
          
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/login" onClick={logout}>Logout</a></li>
          </ul>
        </div>
        :null
}
</div>
            </div>
        </nav>
    
    

    </div>
  )
}
