import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger if not done yet
gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (
  targets,
  trigger,
  start = "top 90%",
  options = {}
) => {
  gsap.to(targets, {
    opacity: 1,
    y: "0px",
    duration: 1,
    scrollTrigger: {
      trigger: trigger,
      start: start,
      once: true,
      ...options, // Allows passing additional ScrollTrigger options
    },
  });
};
