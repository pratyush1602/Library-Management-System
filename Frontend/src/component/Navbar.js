import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = ({setDepartment}) => {

  const handleClick = (department) => {
    setDepartment(department);
  };

  // const handleSearch = (event) => {

  // }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/Home">LibMan</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Department
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Computer Science" onClick={() => handleClick('Computer Science')}>Computer Science</Link></li>
                  <li><Link className="dropdown-item" to="/Civil Engineering" onClick={() => handleClick('Civil Engineering')}>Civil Engineering</Link></li>
                  <li><Link className="dropdown-item" to="/Chemical Engineering" onClick={() => handleClick('Mechanical Engineering')}>Mechanical Engineering</Link></li>
                  <li><Link className="dropdown-item" to="/Mechanical Engineering" onClick={() => handleClick('Chemical Engineering')}>Chemical Engineering</Link></li>
                  <li><Link className="dropdown-item" to="/Electrical Engineering" onClick={() => handleClick('Electrical Engineering')}>Electrical Engineering</Link></li>
                  <li><Link className="dropdown-item" to="/Engineering Physics" onClick={() => handleClick('Engineering Physics')}>Engineering Physics</Link></li>
  
                  
                </ul>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

