import bannerPromocional from "../../assets/images/banners/banner_promocional.png";
import bannerPromocional2 from "../../assets/images/banners/banner_promocional3.png";
import bannerAmostra from "../../assets/images/banners/banner-amostra-direito-tributario.png";
import iconFormation from "../../assets/images/icone-formacao.png";
import iconQuality from "../../assets/images/icone-qualidade.png";
import iconAnywhere from "../../assets/images/icone-qualquer-lugar.png";
import iconRecognized from "../../assets/images/reconhecido-pelo-mercado.png";
import unidadeMovel from "../../assets/images/unidade_movel.jpg";
import AttributesBar from "../../components/AttributesBar";
import Banner from "../../components/Banner";
import BusinessPlanBanner from "../../components/BusinessPlanBanner";
import CategoryCarousel from "../../components/CategoryCarousel";
import CourseFeatures from "../../components/CourseFeatures";
import PartnerShip from "../../components/PartnerShip";
import PlansBanner from "../../components/PlansBanner";
import PlansCarousel from "../../components/PlansCarousel";
import RedBand from "../../components/RedBand";
import Testimonials from "../../components/Testimonials";
import videoEducaflix from "../../assets/videos/educaflix-chamada.mp4";
import videoBG from "../../assets/images/video-bg.png";
import "./styles.css";

function Home() {
  const bannerSlider = [
    { src: bannerPromocional, url: "#" },
    { src: bannerPromocional2, url: "#" },
  ];

  return (
    <>
      <div className="content">
        <section id="home">
          <Banner imgBanner={bannerSlider} />
          <section id="home_body">
            <RedBand />
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 p-0">
                  <div className="course-features mt-0">
                    <div className="row no-gutters">
                      <div
                        id="first_card"
                        className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                      >
                        <CourseFeatures
                          icon={iconQuality}
                          title="Cursos de Qualidade"
                          alt="Cursos de Qualidade"
                          subtitle="Cursos intensivos, áreas amplas e de qualidade, autorizados pelo MEC."
                        />
                      </div>
                      <div
                        id="second_card"
                        className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                      >
                        <CourseFeatures
                          icon={iconAnywhere}
                          title="Estude de qualquer lugar"
                          alt="Estude de qualquer lugar"
                          subtitle="Acessível 24 horas por dia, onde e quando você quiser."
                        />
                      </div>
                      <div
                        id="third_card"
                        className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                      >
                        <CourseFeatures
                          icon={iconRecognized}
                          title="Reconhecidos pelo mercado"
                          alt="Reconhecidos pelo mercado"
                          subtitle="Foco no que o mercado precisa, com formação completa para
                        acelerar a sua carreira."
                        />
                      </div>
                      <div
                        id="last_card"
                        className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                      >
                        <CourseFeatures
                          icon={iconFormation}
                          title="Formação em carreira"
                          alt="Formação em carreira"
                          subtitle="Uma jornada de conteúdo formada para facilitar o seu
                        aprendizado no dia a dia."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PartnerShip />
            {/* <PlansCarousel /> */}
            {/* <CategoryCarousel /> */}
            <Testimonials />
            {/* <PlansBanner /> */}
            <AttributesBar />
            <BusinessPlanBanner />
          </section>
        </section>
      </div>
      <div className="filler"></div>
      <input
        type="text"
        id="page_is_dirty"
        name="page_is_dirty"
        value="0"
        readOnly
        style={{ display: "none" }}
      />
    </>
  );
}

export default Home;
