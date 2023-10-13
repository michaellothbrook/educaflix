import "./styles.css";

function CourseFeatures(props) {
  return (
    <>
      <div className="course-card">
        <img className="course-card__image" src={props.icon} alt={props.alt} />
        <div className={`mt-3 mb-2 ${props.class ?? "course-card__title"}`}>
          {props.title}
        </div>
        <div className="course-card__subtitle">{props.subtitle}</div>
      </div>
      <div className="mt-5 mt-md-4 mx-3 horizontal-separator d-block d-lg-none"></div>
    </>
  );
}

export default CourseFeatures;
