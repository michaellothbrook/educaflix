import iconClock from "../../assets/images/relogio.svg";
import toKebabCase from "../../Utils/toKebabCase";
import "./styles.css";

function CoursesCard(props) {
  return (
    <>
      <div className="col-12 formation-card">
        <div className="my-5">
          <div className="row">
            <div className="col-12 col-md-3 d-flex flex-column flex-sm-row align-items-center">
              <img
                className="formation-card__image"
                src={`${process.env.PUBLIC_URL}/assets/images/${toKebabCase(
                  props.category
                )}.png`}
                alt="Educação"
              />
              <div className="formation-card__title ml-0 ml-sm-4 h6 mt-3 font-weight-bold">
                <a
                  target="blank"
                  href={`https://ead.educaflix.com.br/cursos/${toKebabCase(
                    props && props.category
                  )}/`}
                  className="category-link"
                >
                  {props && props.category}
                  <div className="formation-card__border-b--header mt-1"></div>
                </a>
              </div>
            </div>
            <div className="offset-6 col-3 d-none d-md-block">
              <a
                target="blank"
                href={`https://ead.educaflix.com.br/cursos/${toKebabCase(
                  props && props.category
                )}/`}
                className="d-block text-white formation-card__top-tab p-2 text-center"
              >
                Acesse mais {props && props.numberCourses} cursos
              </a>
            </div>
          </div>
          <div className="row">
            {props.course !== "" ? (
              props.course
                .map((courseByCategory) => {
                  return (
                    <div
                      key={courseByCategory.id}
                      className="card col-12 col-sm-6 col-md-4 mb-5"
                    >
                      <div className="card-header">
                        <img src={courseByCategory.foto} width="100%" alt="" />
                      </div>
                      <div className="card-body text-center pb-2">
                        <a
                          target="blank"
                          href={`https://ead.educaflix.com.br/curso/${toKebabCase(
                            String(courseByCategory.titulo)
                          )}`}
                          className="course-link"
                        >
                          {courseByCategory.titulo} <br />
                          <span className="font-weight-bold d-flex justify-content-center align-items-center">
                            <img src={iconClock} className="mr-1" alt="" />
                            {courseByCategory.carga_horaria} horas
                          </span>
                        </a>
                      </div>
                      <div className="formation-card__border-b card-footer text-center">
                        <span>Acesso Imediato</span>
                        <a
                          target="blank"
                          href={`https://ead.educaflix.com.br/curso/${toKebabCase(
                            String(courseByCategory.titulo)
                          )}`}
                          className="btn btn-lg"
                        >
                          ASSINE AGORA
                        </a>
                      </div>
                    </div>
                  );
                })
                .slice(0, 3)
            ) : (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <div className="col-12 d-block d-md-none mt-4">
              <a
                target="blank"
                href={`https://ead.educaflix.com.br/cursos/${toKebabCase(
                  props.category
                )}/`}
                className="d-block text-white formation-card__top-tab p-2 text-center"
              >
                {props.numberCourses} cursos
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesCard;
