import React from 'react';

//Navbar for all of the pages.
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid collapse navbar-collapse">
          <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link active" href="/movies">
                Movies
              </a>
            </li>
            <li>
              <a className="nav-link active" href="/podcasts">
                Podcasts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
