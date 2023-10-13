import "./styles.css";

import videoEducaflix from "../../assets/videos/educaflix-chamada.mp4";
import videoBG from "../../assets/images/video-bg.png";
import ReactPlayer from "react-player";

function PartnerShip() {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-12 col-md-5" id="home_partnership_image">
            <ReactPlayer
              url={videoEducaflix}
              playing={true}
              loop={true}
              width="100%"
              height="100%"
              className="video-background"
              style={{
                backgroundImage: `url(${videoBG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div className="col-12 col-md-7 text-center text-md-left pb-sm-4 pb-lg-0">
            <div className="partnership-text">
              <div className="primary-text mt-5">
                A SUA HORA DE CRESCER CHEGOU!
                <br />
                APRENDA NO SEU TEMPO
              </div>
              <div className="secondary-text mt-3">
                Buscando o melhor ensino do mercado a Faculdade Educaflix
                disponibiliza mais de 2000 cursos com qualidade americana
                através de uma assinatura mensal.
              </div>
              <div className="text-md-left my-5">
                <a
                  className="register-button"
                  href="https://ead.educaflix.com.br/plano/pacotao"
                >
                  <span className="font-weight-bold">ASSINE AGORA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerShip;
