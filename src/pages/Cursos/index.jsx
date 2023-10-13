import { useEffect, useState } from "react";
import iconCareerAccelerator from "../../assets/images/acelerador-de-carreira.png";
import MoreDoisMilCourses from "../../assets/images/mais-de-2000-cursos.png";
import iconRecognized from "../../assets/images/reconhecido-pelo-mercado.png";
import iconLearningRoute from "../../assets/images/rota-de-aprendizado.png";
import AttributesBar from "../../components/AttributesBar";
import Banner from "../../components/Banner";
import BusinessPlanBanner from "../../components/BusinessPlanBanner";
import CourseFeatures from "../../components/CourseFeatures";
import CoursesCard from "../../components/CoursesCard";
import FilterBar from "../../components/FilterBar";
import PlansBanner from "../../components/PlansBanner";
import RedBand from "../../components/RedBand";
import CourseService from "../../services/CourseService";
import "./styles.css";

function Cursos() {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const courseService = CourseService;
        const category = await courseService.fetchCategories();
        setCategories(category);
      } catch (err) {
        // alert("Ocorreu um erro ao buscar as categorias");
        setCategories({ message: "Ocorreu um erro ao buscar as categorias" });
      }
    }
    fetch();
  }, []);

  useEffect(() => {
    async function fetch() {
      try {
        const courseService = CourseService;
        const course = await courseService.fetchCourses();
        setCourses(course);
      } catch (err) {
        // alert("Ocorreu um erro ao buscar os cursos");
        setCourses({ message: "Ocorreu um erro ao buscar os cursos" });
      }
    }
    fetch();
  }, []);

  return (
    <>
      <section id="formation">
        <Banner
          col={6}
          imgBanner={MoreDoisMilCourses}
          title="Cursos e formações"
          subtitle={`Cursos de carreiras com conteúdo do mercado de trabalho: \n sequências de cursos e conteúdos para você se capacitar na sua área de trabalho`}
          className="banner__title"
          button
        />
        <section id="how_it_works_body">
          <RedBand />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 p-0">
                <div className="course-features mt-0">
                  <div className="row no-gutters align-items-center">
                    <div
                      id="first_card"
                      className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                    >
                      <CourseFeatures
                        className="first-card__content h5 font-weight-bold"
                        title="Porque estudar as formações em carreira?"
                      />
                    </div>
                    <div
                      id="second_card"
                      className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                    >
                      <CourseFeatures
                        icon={iconRecognized}
                        title="JORNADA COMPLETA"
                        subtitle="Áreas estratégicas com cursos completos com exatamente o que o mercado precisa"
                      />
                    </div>
                    <div
                      id="third_card"
                      className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                    >
                      <CourseFeatures
                        icon={iconLearningRoute}
                        title="ROTA DE APRENDIZADO"
                        subtitle="Uma trilha de aprendizado que facilita a sua jornada de aprendizado"
                      />
                    </div>
                    <div
                      id="last_card"
                      className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                    >
                      <CourseFeatures
                        icon={iconCareerAccelerator}
                        title="ACELERADOR DE CARREIRA"
                        subtitle="Uma formação direcionada para acelerar o crescimento da sua carreira"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {Array.isArray(categories) ? (
                categories.map((category) => {
                  const course = courses.filter(
                    (course) => course.categoria_id === category.categoria_id
                  );
                  const numberCourses = courses.filter(
                    (course) => course.categoria_id === category.categoria_id
                  ).length;

                  return (
                    numberCourses > 0 && (
                      <CoursesCard
                        key={category.categoria_id}
                        category={category.categoria}
                        numberCourses={numberCourses}
                        course={course.map((course) => course)}
                      />
                    )
                  );
                })
              ) : (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </div>
          </div>
          <FilterBar />
          <PlansBanner />
          <AttributesBar />
          <BusinessPlanBanner />
        </section>
      </section>
    </>
  );
}

export default Cursos;
