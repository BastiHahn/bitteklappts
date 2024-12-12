"use client";
import { useParams } from "next/navigation";
import services from "@data/services";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const router = useRouter();
  const loaderRef = useRef(null);
  const detailRightRef = useRef(null);
  const arrowRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-arrow-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
      />
    </svg>
  );
  const arrowLeft = (
    <svg
      className="arrow_left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
      />
    </svg>
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(loaderRef.current, {
      scrollTrigger: {
        trigger: detailRightRef.current,
        start: "top 20%",
        end: "bottom 80%",
        scrub: true,
      },
      width: "100%",
    });
  }, []);

  const toContact = () => {
    router.push("/#kontakt");
  };

  const handleServiceClick = (link_id) => {
    router.push(`/services/${link_id}`);
  };

  // Find the service based on the serviceId
  const service = services.find((service) => service.link_id === serviceId);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <section className="service_detail">
      <div className="container">
        <h4 className="det_serv_h4">Services</h4>

        <div className="detail_grid">
          <div className="detail_left">
            <div className="detail_img_cont">
              <img src={service.image} alt={service.alt} />
              <div className="det_loader" ref={loaderRef}></div>
            </div>
          </div>
          <div className="detail_right" ref={detailRightRef}>
            <div className="detail_descr_cont">
              <h2>
                <span>0{service.id} </span>
                {service.title}
              </h2>
              <p>{service.description}</p>

              <h6>Warum {service.title}?</h6>
              <p className="why">{service.why}</p>

              <div className="bulletpoints">
                <h4 className="det_h4">Mein Vorgehen:</h4>
                <div className="steps">
                  <div className="step">
                    <div className="step_flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25rem"
                        height="1.25rem"
                        fill="var(--clrGreen)"
                        className="bi bi-1-square-fill"
                        viewBox="0 0 18 18"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                      </svg>

                      <p className="det_step_title">{service.step1}</p>
                    </div>
                    <p className="step_descr">{service.step1_text}</p>
                  </div>
                  <div className="step">
                    <div className="step_flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25rem"
                        height="1.25rem"
                        fill="var(--clrGreen)"
                        className="bi bi-2-square-fill"
                        viewBox="0 0 18 18"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306" />
                      </svg>

                      <p className="det_step_title">{service.step2}</p>
                    </div>
                    <p className="step_descr">{service.step2_text}</p>
                  </div>
                  <div className="step">
                    <div className="step_flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25rem"
                        height="1.25rem"
                        fill="var(--clrGreen)"
                        className="bi bi-3-square-fill"
                        viewBox="0 0 18 18"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318" />
                      </svg>

                      <p className="det_step_title">{service.step3}</p>
                    </div>
                    <p className="step_descr">{service.step3_text}</p>
                  </div>
                </div>
              </div>
              <h6>{service.endpartTitle}</h6>
              <p className="why">{service.endpart}</p>
              <button onClick={toContact}>Termin vereinbaren</button>
            </div>
          </div>
        </div>

        <div className="slider_flex_Serv container">
          {service.id === 1 ? (
            <>
              <button
                className="btn_next_service"
                onClick={() => router.push("/#services")}
              >
                {arrowLeft} Alle Services
              </button>
              <button
                className="btn_next_service"
                onClick={() => handleServiceClick(services[service.id].link_id)}
              >
                {services[service.id].title} {arrowRight}
              </button>
            </>
          ) : service.id === services.length ? (
            <>
              <button
                className="btn_next_service"
                onClick={() =>
                  handleServiceClick(services[service.id - 2].link_id)
                }
              >
                {arrowLeft} {services[service.id - 2].title}
              </button>
              <button
                className="btn_next_service"
                onClick={() => router.push("/#services")}
              >
                Alle Services
              </button>
            </>
          ) : (
            <>
              <button
                className="btn_next_service"
                onClick={() =>
                  handleServiceClick(services[service.id - 2].link_id)
                }
              >
                {arrowLeft} {services[service.id - 2].title}
              </button>
              <button
                className="btn_next_service"
                onClick={() => handleServiceClick(services[service.id].link_id)}
              >
                {services[service.id].title} {arrowRight}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
