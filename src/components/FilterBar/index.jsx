import { useEffect, useState } from "react";
import CourseService from "../../services/CourseService";
import toKebabCase from "../../Utils/toKebabCase";
import "./styles.css";

function FilterBar() {
  const [categories, setCategories] = useState([]);
  const [currentOption, setCurrentOption] = useState("");

  useEffect(() => {
    async function fetch() {
      try {
        const courseService = CourseService;
        const category = await courseService.fetchCategories();
        setCategories(category);
      } catch (err) {
        setCategories({ message: "Ocorreu um erro ao buscar as categorias" });
      }
    }
    fetch();
  }, []);

  function handleFetchCoursesByCategory() {
    window.location.href = currentOption;
  }

  return (
    <>
      <section
        id="search_course"
        className="row no-gutters py-5 d-flex align-content-center text-center"
      >
        <div className="col-12 text-center color-white font-weight-bold mb-3">
          <p className="font-size-2">
            Se não encontrou o curso, qual você deseja?
          </p>
        </div>
        <div className="offset-1 col-6 col-lg-5 col-md-4 offset-md-3 px-2">
          <form action="">
            <select
              className="search-course-input"
              onChange={(e) => setCurrentOption(e.target.value)}
              name="search_course"
            >
              <option value="" defaultValue="selected">
                Selecione
              </option>
              {Array.isArray(categories) &&
                categories.map((category) => {
                  return (
                    <option
                      value={`https://ead.educaflix.com.br/cursos/${toKebabCase(
                        category.categoria
                      )}/`}
                    >
                      {category.categoria}
                    </option>
                  );
                })}
            </select>
          </form>
        </div>
        <div className="col-lg-1 col-md-2 col-sm-3 col-4">
          <button
            onClick={handleFetchCoursesByCategory}
            type="submit"
            className="btn w-100 h-100 course-category-link font-size-08"
          >
            BUSCAR
          </button>
        </div>
      </section>
    </>
  );
}

export default FilterBar;
