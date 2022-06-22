import React from "react";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/sections/Why.scss";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../utils/Animations";

function Why() {
  const [element, controls] = useScroll();

  return (
    <div className="why-container" id="why" ref={element}>
      <div className="container">
        <motion.div
          className="top"
          variants={topContainerAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title="Why SofCo ?" color="pink" lineCenter={true} />
          <div className="subTitle">
            <p>
            Creative web developer dedicated to building and optimizing the
performance of user-centric, high impact websites nationwide. Skill at
writing well defined, testable, and efficient code using current best
practices in web development.Fast learner, hard worker, and team player
who is proficient in an array of scripting languages for a
multimedia web tool

            </p>
          </div>
        </motion.div>
        <div className="content">
          <motion.div
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="video">
              <GoPlay />
            </div>
          </motion.div>
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <ul>
              <li>Work according to your requirement and budget</li>
              <li>
                Provide solutions to our multiple global clients or website
                traffic generation and workflow
              </li>
              <li>Strong team of creative people</li>
              <li>Quick Response to our client</li>
              <li>Ready to recieve service request 24/7</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Why;
