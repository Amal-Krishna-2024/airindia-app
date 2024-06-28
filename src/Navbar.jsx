import React from 'react'

const Navbar = () => {
  return (
    <div>
      
    </div> <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME PAGE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT PAGE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SERVICE PAGE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT PAGE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">FAQ PAGE</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
