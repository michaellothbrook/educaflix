import iconFormation from "../../assets/images/icone-formacao.png";
import iconQuality from "../../assets/images/icone-qualidade.png";
import iconAnywhere from "../../assets/images/icone-qualquer-lugar.png";
import iconRecognized from "../../assets/images/reconhecido-pelo-mercado.png";
import Banner from "../../components/Banner";
import CourseFeatures from "../../components/CourseFeatures";
import "./styles.css";

function ComoFunciona() {
  const span = (
    <>
      O que te
      <span class="color-red-netflix"> destaca no mundo </span>é o conhecimento
    </>
  );
  return (
    <>
      <section id="how_it_works">
        <Banner
          col={12}
          class="banner__title"
          title={span}
          alignText="center"
          subtitle="E você pode começar agora. Entenda como você pode estudar por
        assinatura na Educaflix!"
        />
        <section id="how_it_works_body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="course-features">
                  <div className="row no-gutters">
                    <div
                      id="first_card"
                      className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                    >
                      <CourseFeatures
                        icon={iconQuality}
                        title="Matricule-se"
                        alt="Cursos de Qualidade"
                        subtitle="Com um valor de assinatura fixa você tem acesso liberado a plataforma de ensino"
                      />
                    </div>
                    <div
                      id="second_card"
                      className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                    >
                      <CourseFeatures
                        icon={iconAnywhere}
                        title="Este de qualquer lugar"
                        alt="Estude de qualquer lugar"
                        subtitle="Acessível 24 horas por dia, acessível onde e quando você quiser."
                      />
                    </div>
                    <div
                      id="third_card"
                      className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                    >
                      <CourseFeatures
                        icon={iconRecognized}
                        title="Faça quantos cursos desejar"
                        alt="Faça quantos cursos desejar"
                        subtitle="A assinatura dá acesso ilimitado a todos os cursos e você pode cursar quantos desejar."
                      />
                    </div>
                    <div
                      id="four_card"
                      className="card-container col-12 col-md-6 col-lg-3 mt-5 my-md-4 my-lg-3"
                    >
                      <CourseFeatures
                        icon={iconFormation}
                        title="Solicite seu certificado"
                        alt="Solicite seu certificado"
                        subtitle="Na conclusão dos cursos você pode solicitar seu certificado emitido por uma faculdade reconhecida no MEC."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default ComoFunciona;
