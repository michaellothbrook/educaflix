import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import config from "../../config/config";
import CourseService from "../../services/CourseService";
import deviceType from "../../Utils/deviceType";
import toKebabCase from "../../Utils/toKebabCase";
import "./styles.css";

function CategoryCarousel() {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const courseService = CourseService;
        const category = await courseService.fetchCategories();
        setCategories(category);
      } catch (err) {
        alert({ message: "Ocorreu um erro ao buscar as categorias" });
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
        setCourses({ message: "Ocorreu um erro ao buscar os cursos" });
      }
    }
    fetch();
  }, []);

  return (
    <>
      <div className="categories-carousel">
        <div className="container">
          <div className="row align-items-center text-center text-md-left">
            <div className="col-12">
              <div className="mb-5 mt-5">
                <div className="categories-carousel__primary-text">
                  Não sabe por onde começar?
                </div>
                <div className="categories-carousel__secondary-text mb-3">
                  Escolha os cursos organizados em Área
                </div>
                <div className="categories-carousel__body">
                  <Carousel
                    responsive={config.responsive()}
                    infinite={true}
                    // autoPlay={deviceType() !== "mobile" ? true : false}
                    containerClass="carousel-container"
                    deviceType={deviceType()}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                    {Array.isArray(categories) ? (
                      categories.map((category) => {
                        const numberCourses = courses.filter(
                          (course) =>
                            course.categoria_id === category.categoria_id
                        ).length;

                        if (numberCourses === 0) {
                          return <></>;
                        }
                        return (
                          <div
                            key={category.categoria_id}
                            className="categories-carousel__card"
                          >
                            <a
                              target="blank"
                              href={`https://ead.educaflix.com.br/cursos/${toKebabCase(
                                category.categoria
                              )}/`}
                              className="categories-carousel__card__link"
                            >
                              <div className="categories-carousel__card__image-container">
                                <img
                                  className="categories-carousel__card__image-container__image"
                                  src={`${
                                    process.env.PUBLIC_URL
                                  }/assets/images/${toKebabCase(
                                    category.categoria
                                  )}.png`}
                                  alt="Educação"
                                />
                              </div>
                              <div className="categories-carousel__card__title">
                                {category.categoria}
                              </div>
                              <div className="categories-carousel__card__subtitle">
                                {numberCourses} Cursos
                              </div>
                            </a>
                          </div>
                        );
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

export default CategoryCarousel;
