import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Testimonials.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

export default function Testimonials() {
  const [element, controls] = useScroll();

  return (
    <div className="testimonials-container" id="services" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title="Services" color="blue" lineCenter={true} />
          <p>See what our freelancers are providing you.</p>
        </motion.div>
        <div className="testimonials">
          <Testimonial
            content="Building quality websites with HTML, CSS, SCSS, BOOTSTRAP, JavaScript, React & PHP."
            name="Web Development & Designing"
            designation="SofCo"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Logo, Banner, Poster, Flyer, Brochure, Advertising & Marketing Design, Art and Illustration Design, Packaging Design."
            name="Graphic Designing"
            designation="SofCo"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="WordPress contains plugin architecture and a template system, so you can customize any website to fit your business, blog, portfolio, or online store."
            name="WordPress Experts"
            designation="SofCo"
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}
