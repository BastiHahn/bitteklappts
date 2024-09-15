import React, { useState } from "react";
import successStory from "@data/successStory";
import Image from "next/image";

const NewTestimonials = () => {
  const [openStates, setOpenStates] = useState(
    Array(successStory.length).fill(false)
  );
  const [currentSlide, setCurrentSlide] = useState(2);

  const arrowRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className="bi bi-arrow-right-square-fill"
      viewBox="0 0 16 16"
    >
      <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
    </svg>
  );

  const arrowLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className="bi bi-arrow-left-square-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
    </svg>
  );

  const handleBtnClick = (index) => {
    setOpenStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const totalSlides = successStory.length;

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="newTest_section" id="referenzen">
      <div className="container">
        <h2 className="ref_header">Referenzen</h2>
        <p className="ref_sub_head">
          Sieh selbst, welche Erfahrungen meine Kunden gemacht haben und wie
          diese ihnen in ihrem Leben und auf ihrer Fitnessjourney geholfen
          haben. Bei mir stehst immer DU im Mittelpunkt und mein Ziel ist es,
          Dich bestmöglich auf deinem Weg zu begleiten.
        </p>

        <div className="newtest_grid">
          <div className="arrow_div" onClick={goToPrevSlide}>
            {arrowLeft}
          </div>

          <div className="inner_grid">
            <div className="newtest_left">
              <div className="img_new_test_cont">
                <Image
                  width={1000}
                  height={1000}
                  quality={100}
                  src={successStory[currentSlide].image}
                  alt={successStory[currentSlide].alt}
                  blur="true"
                />
              </div>
            </div>
            <div className="newtest_right">
              <div className="newtest_content">
                <h5>{successStory[currentSlide].head}</h5>
                <div
                  className="story_begrenzer"
                  style={{
                    overflowY: openStates[currentSlide] ? "auto" : "hidden",
                    outline: openStates[currentSlide]
                      ? "1px solid var(--clrGrey)"
                      : "none",
                    padding: openStates[currentSlide] ? "0rem .5rem" : "0rem",
                  }}
                >
                  {successStory[currentSlide].story.zusammenfassung}
                  {openStates[currentSlide] &&
                    successStory[currentSlide].story.lang}
                </div>
              </div>

              <div className="newtest_info">
                <div className="pers_info">
                  <h4>
                    {successStory[currentSlide].name}
                    <span> ({successStory[currentSlide].alter})</span>
                  </h4>
                  <p className="new_job">{successStory[currentSlide].job}</p>
                </div>

                <div className="read_div">
                  <button onClick={() => handleBtnClick(currentSlide)}>
                    {openStates[currentSlide] ? "weniger lesen" : "mehr lesen"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="arrow_div" onClick={goToNextSlide}>
            {arrowRight}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTestimonials;
