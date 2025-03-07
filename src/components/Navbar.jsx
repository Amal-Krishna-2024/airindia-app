import React from 'react'

const Navbar = () => {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">AIR INDIA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">HOME PAGE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">ABOUT PAGE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/service">SERVICE PAGE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">CONTACT PAGE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/faq">FAQ PAGE</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar

