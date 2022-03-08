import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <NavBB href="/" className="navbar-brand">
          Website 01
        </NavBB>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <NavUl className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link text-uppercase active">
                home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link text-uppercase">
                about
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link text-uppercase">
                team
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link text-uppercase">
                services
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link text-uppercase">
                testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="#content" className="nav-link text-uppercase">
                content
              </a>
            </li>
          </NavUl>
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  background-color: #f16821;
  width: 100vw;
  top: 0;
  z-index: 100;
`;

const NavBB = styled.a`
  font-size: 2rem;
  color: white !important;
  font-weight: bold;
  flex-grow: 1;
  @media (min-width: 768px) {
    text-align: center;
  }
`;
const NavUl = styled.ul`
  flex-grow: 1;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.2rem;
  li {
    a {
      color: #fff !important;
    }
  }
`;
export default NavBar;
