"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonials = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headTests = useRef(null);
  const testSection = useRef(null);
  const testSubHead = useRef(null);

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
  const starSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      className="star"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
  const successStory = [
    {
      name: "Andi",
      alter: 31,
      sterne: 5,
      job: "Schreiner",
      story:
        "Durch das Personal Training habe ich eine völlig neue Einstellung zu Fitness und Gesundheit entwickelt. Die Fortschritte, die ich gemacht habe, sind erstaunlich! Das Training hat mir nicht nur geholfen, fitter zu werden, sondern auch mein Selbstbewusstsein gestärkt. Ich bin jetzt viel motivierter und fühle mich großartig.",
      image: "dfdf",
      alt: "dfsfe",
      id: 1,
      image: "/images/man .png",
      head: "Spaß und Ergebnisse",
    },
    {
      name: "Aleyna",
      alter: 29,
      sterne: 5,
      job: "Lehramtstudentin",
      story:
        "Dank des Personal Trainings habe ich es geschafft, meine Grenzen zu überwinden und meine Fitnessziele zu erreichen. Die professionelle Anleitung und Unterstützung waren unbezahlbar. Ich hätte nie gedacht, dass ich so viel erreichen könnte. Das Personal Training hat meine Erwartungen weit übertroffen und mein Leben positiv verändert.",
      image: "dfdf",
      alt: "dfsfe",
      id: 2,
      image: "/images/aleyna.png",
      head: "KnowHow & Freude",
    },
    {
      name: "Nima",
      alter: 44,
      sterne: 3,
      job: "Produktdesigner",
      story:
        "Die individuelle Betreuung und die maßgeschneiderten Trainingspläne haben den Unterschied gemacht. Ich fühle mich stärker und gesünder als je zuvor. Die Zusammenarbeit mit meinem Personal Trainer war eine der besten Entscheidungen, die ich je getroffen habe. Mein Fitnessniveau hat sich drastisch verbessert.",
      image: "dfdf",
      alt: "dfsfe",
      id: 3,
      image: "/images/IMG_1141.jpg",
      head: "Power ohne Ende",
    },
  ];

  return (
    <section className="section_testimonials" ref={testSection} id="kunden">
      <div className="divider_succ1"></div>
      <div className="container succ_cont">
        <h2 className="h_success" ref={headTests}>
          Erfolgsgeschichten
        </h2>
        <p className="erfolg_descr" ref={testSubHead}>
          Lass dich von den Erfolgsgeschichten meiner Klienten motivieren, die
          durch meine professionelle Anleitung und unterstützende Betreuung ihre
          Grenzen überwunden haben. Erfahre, was sie über unsere gemeinsame
          Reise sagen.
        </p>
      </div>
      <div className="divider_succ2"></div>
      <div className="testi_cont container">
        {successStory.map((story) => (
          <div className="success" key={story.id}>
            <div className="success_img_cont">
              <Image
                src={story.image}
                alt={story.job}
                width={600}
                height={800}
                quality={100}
                blur="true"
              />
            </div>

            <div className="success_info_div">
              <div className="success_inner">
                <div className="success_details">
                  <p className="success_name">{story.name}</p>
                  <p className="success_job">
                    {story.job}, {story.alter} Jahre alt
                  </p>
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
                <p>"{story.story}"</p>
                <div className="star_flex">
                  {Array.from({ length: story.sterne }, (_, index) => (
                    <span key={index}>{starSVG}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
