import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import config from "../../config/config";
import deviceType from "../../Utils/deviceType";
import "./styles.css";

function Banner(props) {
  function startVideo() {
    window.onload = async function () {
      await document.querySelector("video").play();
    };
  }
  startVideo();
  return (
    <>
      {props.col ? (
        <section className="banner container d-flex d-md-block justify-content-center justify-content-md-start align-items-end align-items-md-start pt-5 pb-4 pb-md-0">
          <div className="row">
            <div className="col-12 col-md-6 d-flex align-items-center px-5 px-md-0 px-lg-5">
              <img src={props.imgBanner} alt="" />
            </div>
            <div className="col-12 col-md-6 mt-5 text-center text-md-left">
              <div className={`banner__lead ${props.class ?? ""}`}>
                {props.title}
              </div>
              <div className="banner__subtitle mt-2 mb-3 font-weight-normal">
                {props.subtitle.replace(/\\n/g, <br />)}
              </div>
              <div className="my-4 py-4 pt-md-0">
                <a
                  className="register-button"
                  href="https://ead.educaflix.com.br/cadastro/"
                >
                  <span className="font-weight-bold">MATRICULE-SE</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="container-fluid p-0">
            {/* <Carousel infiniteLoop showThumbs={false} stopOnHover>
              {props.imgBanner.map((banner) => {
                if (banner.video) {
                  return (
                    <div className="">
                      <ReactPlayer
                        light={banner.videoBG}
                        playing={true}
                        R
                        url={banner.video}
                        height="100%"
                        width="100%"
                      />
                    </div>
                  );
                }
                return (
                  <a href={banner.url} aria-expanded>
                    <img src={banner.src} alt="" />
                  </a>
                );
              })}
            </Carousel> */}
            <Swiper spaceBetween={0} slidesPerView={1} centeredSlides>
              {props.imgBanner.map((banner) => {
                if (banner.video) {
                  return (
                    <SwiperSlide key={banner.video}>
                      <div id="video_educaflix">
                        <ReactPlayer
                          style={{ width: "100%", height: "82vh" }}
                          className="video-player-educaflix"
                          url={banner.video}
                          controls
                          height={deviceType() === "mobile" ? "100%" : "82vh"}
                          width={"100%"}
                          // light={banner.videoBG}
                          config={{
                            file: {
                              attributes: {
                                autoPlay: true,
                              },
                              forceVideo: true,
                            },
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
                return (
                  <SwiperSlide key={banner.video}>
                    <a href={banner.url}>
                      <img src={banner.src} alt="" />
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
        </>
      )}
    </>
  );
}

export default Banner;
