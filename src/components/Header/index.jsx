import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <>
      <header>
        <div className="upper-header d-md-block d-none">
          <div className="container">
            <div className="justify-content-between align-items-center d-flex">
              <div>
                <p className="font-size-08 font-weight-bold my-auto">
                  <a href="##">Seu portal de cursos por assinatura.</a>
                </p>
              </div>
              <ul className="nav social-media">
                <li className="nav-item nav-border-right">
                  <a
                    target="blank"
                    className="nav-link"
                    href="https://www.facebook.com/Educaflix-105761007985866/"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    target="blank"
                    className="nav-link"
                    href="https://twitter.com/educaflix"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    target="blank"
                    className="nav-link"
                    href="https://www.youtube.com/channel/UCtgWHkNfAKM5iCGrNebdECQ"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    target="blank"
                    className="nav-link"
                    href="https://www.instagram.com/educaflix_"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container header-content">
          <nav className="navbar navbar-expand-lg justify-content-between px-0 px-sm-1">
            <div className="nav-item nav-logo d-block mr-sm-5 ml-sm-n3">
              <Link to="/">
                <img
                  src="https://ead.educaflix.com.br/upload/others/220620211624389357logo-educaflix-site.png"
                  className="logo"
                  alt="Educaflix"
                />
              </Link>
            </div>
            <button
              className="navbar-toggler font-size-1-5"
              type="button"
              data-toggle="collapse"
              data-target=".multi-collapse"
              aria-controls="menuContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <div
              className="menu-container collapse navbar-collapse multi-collapse font-weight-bold"
              id="menuContent"
            >
              <ul className="navbar-nav flex-column flex-lg-row text-center text-lg-left mb-4 mb-lg-0">
                <li className="nav-item my-auto active">
                  <Link className="nav-link" to="/">
                    HOME
                  </Link>
                </li>
                <li className="nav-item my-auto ">
                  <a className="nav-link" href="https://ead.educaflix.com.br/cursos">
                    CURSOS
                  </a>
                </li>
                <li className="nav-item my-auto ">
                  <a className="nav-link" href="https://ead.educaflix.com.br/page/faq/">
                    FAQ
                  </a>
                </li>
                <li className="nav-item my-auto d-lg-block d-none">
                  <div className="nav-link vertical-separator"></div>
                </li>
                <li className="nav-item my-auto ">
                  <a
                    className="nav-link"
                    href="https://ead.educaflix.com.br/login/"
                  >
                    ENTRAR
                  </a>
                </li>
                <li className="nav-item my-3 my-md-2 my-lg-auto ml-lg-3">
                  <a className="register-button" href="https://ead.educaflix.com.br/cadastro/">
                    <span className="font-weight-bold">MATRICULE-SE</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
