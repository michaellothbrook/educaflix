import businessImage from "../../assets/images/cursos-corporativo.png";
import "./styles.css";

function BusinessPlanBanner() {
  return (
    <>
      <div className="business-plan-banner py-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 text-center text-md-left d-flex align-items-center">
              <div className="business-plan__body">
                <div className="business-plan-banner__title">
                  Cursos corporativos
                </div>
                <div className="mt-3">
                  Capacite seu time e acelere o crescimento de sua equipe e dos
                  seus negócios com cursos que fazem a diferença para a sua
                  empresa. Venha suprir a demanda profissional do seu mercado.
                </div>
                <div className="py-3 d-flex justify-content-start">
                  <a
                    className="btn business-plan-banner__btn font-size-09 mt-4 py-2"
                    href="https://ead.educaflix.com.br/cadastro"
                  >
                    ASSINE AGORA
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-5 mt-4 mt-md-0"
              id="business_plan_image"
            >
              <img src={businessImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessPlanBanner;
