

import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='sticky-top'>
<nav class="navbar sticky-top navbar-expand-lg  bg-body-tertiary">
  <div class="sticky-top container-fluid sticky-top">
    <button id="btn" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

    <i class="fab fa-facebook"></i>


    <i class="fab fa-youtube"></i>
    <i class="fab fa-twitter"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-pinterest-p"></i>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Disabled</a>
        </li>
      </ul>

      <p className='d-flex ms-auto'>
      <Link className="link" href="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
    </p>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Navbar