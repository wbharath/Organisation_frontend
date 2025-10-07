import { NavLink } from 'react-router'

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav
          class="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Employee Management System
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/employees" className="nav-link">
                    Employees
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/departments" className="nav-link">
                    Departments
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
