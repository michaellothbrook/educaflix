import certificate from '../../assets/images/certificate.png';
import global from '../../assets/images/global.png';
import time from '../../assets/images/time.png';
import "./styles.css";


function AttributesBar() {
  return (
    <>
      <div className="attributes-bar my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="attributes-bar__container h-100 justify-content-sm-center justify-content-md-start">
                <div className="attributes-bar__img-container d-flex align-items-center justify-content-center">
                  <img
                    src={certificate}
                    alt="Certificado"
                  />
                </div>
                <div className="atributtes_bar__text ml-3 ml-sm-2">
                  CURSOS INTENSIVOS AUTORIZADOS PELO MEC
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="attributes-bar__container h-100 justify-content-sm-center justify-content-md-start">
                <div className="attributes-bar__img-container d-flex align-items-center justify-content-center">
                  <img
                    src={time}
                    alt="Relógio"
                  />
                </div>
                <div className="atributtes_bar__text ml-3 ml-sm-2">
                  ESTUDE 24H/DIA ONDE E QUANDO QUISER
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="attributes-bar__container h-100 justify-content-sm-center justify-content-md-start">
                <div className="attributes-bar__img-container d-flex align-items-center justify-content-center">
                  <img
                    src={global}
                    alt="Globo"
                  />
                </div>
                <div className="atributtes_bar__text ml-3 ml-sm-2">
                  ACEITO EM CONCURSOS PÚBLICOS E ÓRGÃOS FEDERAIS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttributesBar;
