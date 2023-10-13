import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import config from "../../config/config";
import CourseService from "../../services/CourseService";
import deviceType from "../../Utils/deviceType";
import Countdown from "react-countdown";
import timerIcon from "../../assets/images/ic_round-timer.png";
import "./styles.css";

function PlansCarousel() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const courseService = CourseService;
        const plan = await courseService.fetchPlans();
        const plansPromises = plan.map(async (plan) => {
          const numberCourses = await courseService.fetchPlansCourses(plan.id);
          return { ...plan, numberCourses };
        });
        const planWithCoursesQuantity = await Promise.all(plansPromises);
        setPlans(planWithCoursesQuantity);
      } catch (err) {
        // alert("Ocorreu um erro ao buscar os planos");
        setPlans({ message: "Nada encontrado!" });
      }
    })();
  }, []);

  return (
    <>
      <div className="plans-carousel">
        <div className="container">
          <div className="row align-items-center text-center text-md-left">
            <div className="col-12">
              <div className="mb-5 mt-5">
                <div className="plans-carousel__primary-text">Planos</div>
                <div className="categories-carousel__secondary-text mb-3">
                  Escolha um de nossos planos
                </div>
                <div className="categories-carousel__body">
                  <Carousel
                    showDots={false}
                    responsive={config.responsive(4)}
                    infinite={true}
                    autoPlay={deviceType() !== "mobile" ? true : false}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    containerClassName="carousel-container"
                    deviceType={deviceType()}
                    dotListClassName="custom-dot-list-style"
                    itemClassName="carousel-item-padding-40-px"
                  >
                    {typeof plans.length === "object" &&
                    plans.message === "Nada encontrado!" ? (
                      "Nada encontrado!"
                    ) : plans.length > 0 ? (
                      plans
                        .sort((a, b) => a.ordem - b.ordem)
                        .map((plan) => {
                          return (
                            <div
                              key={plan.id}
                              className="categories-carousel__card card"
                            >
                              <a
                                target="blank"
                                href={plan.url_plano}
                                className="categories-carousel__card__link"
                              >
                                <div className="card-header destaque text-center">
                                  {plan.destaque === "1" && (
                                    <span className="mais">
                                      PREÇO PROMOCIONAL DE LANÇAMENTO
                                    </span>
                                  )}
                                </div>
                                <div className="card-body text-center pb-2">
                                  <div className="item-plan text-dark">
                                    <span className="plan_title">
                                      {plan.titulo}
                                    </span>
                                    <span className="plan_price d-block mb-4 mt-4">
                                      <span className="plan-currency">R$ </span>
                                      <strong className="plan_value">
                                        {plan.preco.replace(".", ",")}
                                      </strong>
                                      <span className="plan_cycle">
                                        /Mensal
                                      </span>
                                      <div className="parcele font-weight-bold">
                                        Pagamento à vista
                                      </div>
                                    </span>
                                    <span className="plan_courses">
                                      <strong>{plan.numberCourses}</strong>{" "}
                                      Curso(s) incluso(s)
                                    </span>
                                  </div>
                                </div>
                                <div className="formation-card__border-b card-footer text-center">
                                  <span className="plan_button">
                                    <span className="btn button btn-custom">
                                      {plan.destaque === "1" ? (
                                        <>FAÇA AGORA SUA MATRÍCULA</>
                                      ) : (
                                        <>Saiba mais</>
                                      )}
                                    </span>
                                  </span>
                                </div>
                              </a>
                            </div>
                          );
                          // }
                        })
                    ) : (
                      <div key={0} className="categories-carousel__card">
                        <div className="categories-carousel__card__title">
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlansCarousel;
