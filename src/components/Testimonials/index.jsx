import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aspasIcon from "../../assets/images/aspas.png";
import config from "../../config/config";
import UserService from "../../services/UserService";
import deviceType from "../../Utils/deviceType";
import "./styles.css";



function Testimonials() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetch() {
      const userService = UserService;
      const student = userService.fetchStudents();
      setStudents([student]);
    }
    fetch();
  }, []);
  
  return (
    <>
      <div className="testimonials-carousel mt-5 text-center text-md-left">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="testimonials-carousel__primary-text">
                Depoimentos de quem já
                <br />
                estudou na{" "}
                <span className="testimonials-carousel__primary-text--featured">
                  Educaflix
                </span>
              </h2>
            </div>
          </div>
          <div className="testimonials-carousel__body">
            <Carousel
              showDots={false}
              partialVisbile
              responsive={config.responsive(3)}
              infinite={true}
              autoPlay={deviceType() !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              containerClass="carousel-container"
              deviceType={deviceType()}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div
                className="testimonials-carousel__card-container"
                data-index="0"
              >
                <div className="testimonials-carousel__card--active">
                  <div className="testimonials-carousel__card--active__body">
                    <img
                      className="testimonials-carousel__card--active--quotes mb-2"
                      src={aspasIcon}
                      alt="Aspas"
                    />
                    Passei dois anos e meio desempregado e foi onde conheci os
                    cursos da Educaflix Assinaturas. Consegui fazer uma mudança
                    de carreira em uma área muito disputada e estou muito feliz:
                    passei em um processo seletivo como Agente de Inovação, e
                    muito do que aprendi tanto para a prova quanto para a etapa
                    presencial foi graças a Educaflix.
                    <div className="testimonials-carousel__card--active__autor mt-3 mb-3 ml-2">
                      Leandro de Freitas
                    </div>
                  </div>
                </div>
                <div className="testimonials-carousel__card pb-2">
                  <img
                    className="mb-3"
                    src={aspasIcon}
                    alt="Aspas"
                  />
                  Passei dois anos e meio desempregado e foi onde conheci os
                  cursos da Educaflix Assinaturas. Consegui fazer uma mudança de
                  carreira em uma área muito disputada e estou muito feliz:
                  passei em um processo seletivo como Agente de Inovação, e
                  muito do que aprendi tanto para a prova quanto para a etapa
                  presencial foi graças a Educaflix.
                  <div className="testimonials-carousel__card__autor my-3">
                    Leandro de Freitas
                  </div>
                </div>
              </div>
              <div
                className="testimonials-carousel__card-container"
                data-index="1"
              >
                <div className="testimonials-carousel__card--active">
                  <div className="testimonials-carousel__card--active__body">
                    <img
                      className="testimonials-carousel__card--active--quotes mb-2"
                      src="https://ead.educaflix.com.br/assets/images/white_quotes.svg"
                      alt="Aspas"
                    />
                    A experiência com a plataforma da Educaflix é muito boa: a
                    equipe consegue estar sempre atualizada sobre as novas
                    tecnologias, agregar conhecimentos e se aperfeiçoar. O
                    acompanhamento mensal da equipe ajudou bastante, tanto como
                    os relatórios gerenciais da plataforma.
                    <div className="testimonials-carousel__card--active__autor mt-3 mb-3 ml-2">
                      Marcelo Takajima - Dowbis
                    </div>
                  </div>
                </div>
                <div className="testimonials-carousel__card pb-2">
                  <img
                    className="mb-3"
                    src={aspasIcon}
                    alt="Aspas"
                  />
                  A experiência com a plataforma da Educaflix é muito boa: a
                  equipe consegue estar sempre atualizada sobre as novas
                  tecnologias, agregar conhecimentos e se aperfeiçoar. O
                  acompanhamento mensal da equipe ajudou bastante, tanto como os
                  relatórios gerenciais da plataforma.
                  <div className="testimonials-carousel__card__autor my-3">
                    Marcelo Takajima - Dowbis
                  </div>
                </div>
              </div>
              <div
                className="testimonials-carousel__card-container"
                data-index="2"
              >
                <div className="testimonials-carousel__card--active">
                  <div className="testimonials-carousel__card--active__body">
                    <img
                      className="testimonials-carousel__card--active--quotes mb-2"
                      src="https://ead.educaflix.com.br/assets/images/white_quotes.svg"
                      alt="Aspas"
                    />
                    A Educaflix Ofereceu cursos de qualidade. Foi Ótimo Conteúdo
                    Excelente. Super indico para todos!
                    <div className="testimonials-carousel__card--active__autor mt-3 mb-3 ml-2">
                      Marcelo Andrade
                    </div>
                  </div>
                </div>
                <div className="testimonials-carousel__card pb-2">
                  <img
                    className="mb-3"
                    src={aspasIcon}
                    alt="Aspas"
                  />
                  A Educaflix Ofereceu cursos de qualidade. Foi Ótimo Conteúdo
                  Excelente. Super indico para todos!
                  <div className="testimonials-carousel__card__autor my-3">
                    Marcelo Andrade
                  </div>
                </div>
              </div>
              <div
                className="testimonials-carousel__card-container"
                data-index="3"
              >
                <div className="testimonials-carousel__card--active">
                  <div className="testimonials-carousel__card--active__body">
                    <img
                      className="testimonials-carousel__card--active--quotes mb-2"
                      src="https://ead.educaflix.com.br/assets/images/white_quotes.svg"
                      alt="Aspas"
                    />
                    Foi Uma Experiência Incrível Estudar Na Educaflix. Toda A
                    Equipe Foi Fantástica. Recomendo!
                    <div className="testimonials-carousel__card--active__autor mt-3 mb-3 ml-2">
                      Vanessa Olivera
                    </div>
                  </div>
                </div>
                <div className="testimonials-carousel__card pb-2">
                  <img
                    className="mb-3"
                    src={aspasIcon}
                    alt="Aspas"
                  />
                  Foi Uma Experiência Incrível Estudar Na Educaflix. Toda A
                  Equipe Foi Fantástica. Recomendo!
                  <div className="testimonials-carousel__card__autor my-3">
                    Vanessa Olivera
                  </div>
                </div>
              </div>
              <div
                className="testimonials-carousel__card-container"
                data-index="4"
              >
                <div className="testimonials-carousel__card--active">
                  <div className="testimonials-carousel__card--active__body">
                    <img
                      className="testimonials-carousel__card--active--quotes mb-2"
                      src="https://ead.educaflix.com.br/assets/images/white_quotes.svg"
                      alt="Aspas"
                    />
                    Estou muito satisfeita com a plataforma de ensino, super
                    tranquila, sem dificuldades para o estudo. Parabéns pelo
                    comprometimento e seriedade da instituição.
                    <div className="testimonials-carousel__card--active__autor mt-3 mb-3 ml-2">
                      Renata Gonçalves
                    </div>
                  </div>
                </div>
                <div className="testimonials-carousel__card pb-2">
                  <img
                    className="mb-3"
                    src={aspasIcon}
                    alt="Aspas"
                  />
                  Estou muito satisfeita com a plataforma de ensino, super
                  tranquila, sem dificuldades para o estudo. Parabéns pelo
                  comprometimento e seriedade da instituição.
                  <div className="testimonials-carousel__card__autor my-3">
                    Renata Gonçalves
                  </div>
                </div>
              </div>
              <div
                className="testimonials-carousel__card-container"
                data-index="5"
              >
                <div className="testimonials-carousel__card--active">
                  <div className="testimonials-carousel__card--active__body">
                    <img
                      className="testimonials-carousel__card--active--quotes mb-2"
                      src="https://ead.educaflix.com.br/assets/images/white_quotes.svg"
                      alt="Aspas"
                    />
                    Vejo a Educaflix como possibilidades de ter um futuro de
                    excelência. Excelente estrutura, cursos fabulosos,
                    atendimentos excepcionais. Fico muito feliz de poder
                    participar e desfrutar das maravilhas disposta pela
                    instituição.
                    <div className="testimonials-carousel__card--active__autor mt-3 mb-3 ml-2">
                      Alessandro Santos
                    </div>
                  </div>
                </div>
                <div className="testimonials-carousel__card pb-2">
                  <img
                    className="mb-3"
                    src={aspasIcon}
                    alt="Aspas"
                  />
                  Vejo a Educaflix como possibilidades de ter um futuro de
                  excelência. Excelente estrutura, cursos fabulosos,
                  atendimentos excepcionais. Fico muito feliz de poder
                  participar e desfrutar das maravilhas disposta pela
                  instituição.
                  <div className="testimonials-carousel__card__autor my-3">
                    Alessandro Santos
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
