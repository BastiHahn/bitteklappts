"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import successStory from "@data/successStory";
import successSubheader from "@data/successSubheader";
import { useState } from "react";

const Testimonials = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headTests = useRef(null);
  const testSection = useRef(null);
  const testSubHead = useRef(null);
  // Initialize state as an array of false values, one for each testimonial
  const [open, setOpen] = useState(successStory.map(() => false));

  const toggleBtn = (index) => {
    setOpen((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  useEffect(() => {
    gsap.to([headTests.current, testSubHead.current], {
      opacity: 1,
      y: "0px",
      duration: 1,
      scrollTrigger: {
        trigger: testSection.current,
        start: "top 85%",
        once: "true",
      },
    });
  }, []);

  return (
    <section className="section_testimonials" ref={testSection} id="referenzen">
      <div className="container succ_cont">
        <h2 className="h_success" ref={headTests}>
          Referenzen
        </h2>
        <p className="erfolg_descr" ref={testSubHead}>
          {successSubheader[2].sub}
        </p>
      </div>
      <div className="testi_cont container">
        {successStory.map((story, index) => (
          <div className="success" key={story.id}>
            <div className="success_img_cont">
              <Image
                src={story.image}
                alt={story.alt}
                width={600}
                height={800}
                quality={100}
                blur="true"
                className={story.name}
              />
            </div>

            <div className="success_info_div">
              <div className="success_inner">
                <div className="success_details">
                  <p className="success_name">
                    {story.name}{" "}
                    <span className="alter">{`(${story.alter})`}</span>
                  </p>
                  <p className="success_job">{story.job}</p>
                </div>
                <div className="success_btn_div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm7.194 2.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.5 2.5 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.5 2.5 0 0 0-.228-.4 1.7 1.7 0 0 0-.227-.273 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
                  </svg>
                </div>
              </div>
              <div className="success_additional_info">
                <p className="story_head">{story.head}</p>
                <div
                  className={
                    open[index]
                      ? "story_scrollable_open"
                      : "story_scrollable_hidden"
                  }
                >
                  {story.story}
                </div>
                <button onClick={() => toggleBtn(index)} className="readmore">
                  {open[index] ? "weniger" : "weiterlesen"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
