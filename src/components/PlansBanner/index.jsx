import { Fragment, useEffect, useState } from "react";
import Countdown from "react-countdown";
import CourseService from "../../services/CourseService";
import timerIcon from "../../assets/images/ic_round-timer.png";
import "./styles.css";

function PlansBanner() {
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
      <div className="plans-banner">
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-12 mb-3">
                  <div className="plans-banner__title text-center">
                    Transforme sua vida por meio da educação!
                    <br />
                    Comece agora.
                  </div>
                </div>
                {plans.length > 0 ? (
                  plans
                    .sort((a, b) => a.ordem - b.ordem)
                    .map((plan) => {
                      const listItems = plan.descricao ? (
                        plan.descricao
                          .split(";")
                          .map((item) => <li key={item}>{item}</li>)
                      ) : (
                        <li>Aguardando descrição...</li>
                      );

                      return (
                        <Fragment key={plan.id}>
                          <div className="col-md-6 col-12 text-center text-md-left">
                            <h5>{plan.titulo}</h5>
                            {plan.destaque === "1" ? (
                              <p>PREÇO PROMOCIONAL DE LANÇAMENTO</p>
                            ) : (
                              <p>DESCRIÇÃO DO PLANO</p>
                            )}
                            <h5 className="preco">
                              R$ {plan.preco.replace(".", ",")}
                              <span className="d-block text-center">
                                por mês
                              </span>
                            </h5>
                          </div>
                          <div className="col-md-6 col-12 d-flex align-items-center">
                            <div className="mt-4 text-md-left w-100">
                              <ul className="ml-4">{listItems ?? listItems}</ul>
                              <div className="py-3">
                                <h5 className="numberCourses mb-4">
                                  {plan.numberCourses} Curso(s) Incluso(s)
                                </h5>
                                <a
                                  className="register-button text-center"
                                  href={plan.url_plano}
                                >
                                  <span className="font-weight-bold">
                                    ASSINE AGORA
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="border-b my-4"></div>
                          </div>
                        </Fragment>
                      );
                    })
                ) : (
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlansBanner;
