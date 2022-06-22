import React from "react";
import Blog from "../components/Blog";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import BlogImage1 from "../assets/blogImage1.jpg";
import BlogImage2 from "../assets/blogImage2.jpg";
import BlogImage3 from "../assets/blogImage3.jpg";
import "../styles/sections/Blogs.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

function Blogs() {
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="portfolio" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Portfolio" color="pink" lineCenter={true} />
          <p>Some of our project to showcase.</p>
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            title="Tic Tac Toe Game"
            subTitle="Using HTML, CSS, Javascript, React..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage2}
            title="Logo Design"
            subTitle="Using Adobe photoshop, Adobe Illustrator... "
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage3}
            title="Online Store"
            subTitle="Using Html, Scss, Reactjs,Stripe..."
            variants={cardAnimation}
            animate={controls}
          />
        </div>
        <div
          className="button-container"
          variants={textAnimation}
          animate={controls}
        >
          <Button content="View All" />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
