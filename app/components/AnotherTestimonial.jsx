"use client";
import React, { useState } from "react";
import successStory from "@data/successStory";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnotherTestimonial = () => {
  const router = useRouter();
  const headRef = useRef(null);
  const descrRef = useRef(null);
  const testRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to([headRef.current, descrRef.current], {
      opacity: 1,
      y: "0",
      duration: 1,
      scrollTrigger: {
        trigger: testRef.current,
        start: "top 80%",
        once: "true",
      },
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      // Handle case when currentIndex is 0, wrap around to the last item
      const newIndex =
        prevIndex === 0 ? successStory.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  // Go to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      // Handle case when currentIndex is the last item, wrap around to 0
      const newIndex =
        prevIndex === successStory.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const getPosition = (index) => {
    if (index === currentIndex) {
      return "activeSlide";
    } else if (
      index ===
      (currentIndex === 0 ? successStory.length - 1 : currentIndex - 1)
    ) {
      return "prevSlide";
    } else if (
      index ===
      (currentIndex === successStory.length - 1 ? 0 : currentIndex + 1)
    ) {
      return "nextSlide";
    } else if (
      index > currentIndex + 1 ||
      (index < currentIndex - 1 && currentIndex !== 0)
    ) {
      return "farNextSlide";
    } else {
      return "farPrevSlide";
    }
  };

  const arrowRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      className="bi bi-arrow-right-square-fill"
      viewBox="0 0 16 16"
      fill="var(--clrGreen)"
      onClick={handleNext}
    >
      <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
    </svg>
  );

  const arrowLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      className="bi bi-arrow-left-square-fill"
      viewBox="0 0 16 16"
      fill="var(--clrGreen)"
      onClick={handlePrev}
    >
      <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
    </svg>
  );

  return (
    <section className="anotherTest" id="referenzen" ref={testRef}>
      <div className="container">
        <h2 ref={headRef} className="section_h2 serv_descr_gsap">
          Referenzen
        </h2>
        <p className="section_description w-65 serv_descr_gsap" ref={descrRef}>
          Wo Erfahrung und Know-How auf individuelle Betreuung treffen,
          entstehen Erfolgsgeschichten, die Leben verändern. Erfahre, wie meine
          Arbeit Klienten in unterschiedlichsten Situationen geholfen hat, ihre
          Lebensqualität zu verbessern und ihre Ziele zu erreichen.
        </p>
      </div>

      <div className="slider_flex">
        {successStory.map((s, index) => {
          // Determine the slide's position: prev, active, next, farPrev, or farNext
          const position = getPosition(index);

          return (
            <div key={index} className={`slide ${position}`}>
              {s.story.zusammenfassung}
              <div className="lower_div">
                <div className="left">
                  <div className="img_cont">
                    <img src={s.image} />
                  </div>
                  <div className="personal_info_div">
                    <h3>{s.name}</h3>
                    <p className="sub_low">
                      {s.job}, {s.alter} Jahre alt
                    </p>
                  </div>
                </div>
                <div className="right">
                  <div className="stars">
                    {Array(s.sterne)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrow buttons for navigating */}
      <div className="for_arrows">
        {arrowLeft}
        {arrowRight}
      </div>
    </section>
  );
};

export default AnotherTestimonial;
