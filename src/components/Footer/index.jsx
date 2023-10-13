import { Link } from "react-router-dom";
import "./styles.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="gray-very-dark-background pt-4">
          <div className="container">
            <div className="row flex-column-reverse flex-md-row no-gutters font-size-09">
              <div className="col-12 col-lg-3 col-md-6 mb-lg-3 mb-2 text-center text-lg-left">
                <img
                  alt="Educaflix"
                  src="https://ead.educaflix.com.br/upload/others/220620211624389357logo-educaflix-site.png"
                  className="img-format mb-2"
                />
                <address className="text-lg-left text-center">
                  <p className="ml-4">
                    <span className="font-weight-bold">
                      CURSOS POR ASSINATURA 24 HORAS POR DIA, ILIMITADOS, COM
                      CERTIFICADO INSTANTÂNEO.
                    </span>
                    <br />
                    São mais de 2.000 cursos produzidos por Faculdade.
                  </p>
                </address>
              </div>
              <div className="col-12 col-lg-2 offset-lg-4 col-md-6 mb-lg-3 mb-3 text-center text-lg-left">
                <p className="mb-2">
                  <span className="font-weight-bold">LINKS RÁPIDOS</span>
                </p>
                <p className="mb-0">
                  <Link to="/cursos">Cursos</Link>
                  <br />
                  <a href="https://ead.educaflix.com.br/cadastro/">Matrícula</a>
                  <br />
                  <a href="https://ead.educaflix.com.br/page/faq/">FAQ</a>
                  <br />
                  <a href="https://ead.educaflix.com.br/login">Área do aluno</a>
                  <br />
                </p>
              </div>
              <div className="col-12 col-lg-3 col-md-6 offset-md-3 offset-lg-0 mb-lg-3 mb-4 text-center text-lg-left">
                <div className="newsletter">
                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <a
                      className="mx-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/Educaflix-105761007985866/"
                    >
                      <div className="py-2 text-center icon-wrapper">
                        <i className="fa fa-facebook"></i>
                      </div>
                    </a>
                    <a
                      className="mx-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/educaflix"
                    >
                      <div className="py-2 text-center icon-wrapper">
                        <i className="fa fa-twitter"></i>
                      </div>
                    </a>
                    <a
                      className="mx-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/channel/UCtgWHkNfAKM5iCGrNebdECQ"
                    >
                      <div className="py-2 text-center icon-wrapper">
                        <i className="fa fa-youtube"></i>
                      </div>
                    </a>
                    <a
                      className="mx-2"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/educaflix_"
                    >
                      <div className="py-2 text-center icon-wrapper">
                        <i className="fa fa-instagram"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="netflix-red-background py-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="text-center font-size-08 text-white mb-0">
                  © 2000 - 2021 Educaflix
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
