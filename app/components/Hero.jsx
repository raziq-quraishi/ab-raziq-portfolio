import Container from "./Container";
import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
const Hero = () => {
  return (
    <Container>
      <div className="text-2xl dark:text-gray-200">
        <h1 className="text-4xl dark:text-gray-200">
          <span>I am Ab Raziq</span> <span>Web Developer</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officiis
          quas, libero laborum velit alias cupiditate eligendi aspernatur
          tenetur facilis laudantium voluptates itaque sapiente quis totam
          mollitia distinctio, facere similique!
        </p>
        <div>
          <button>
            <span>Download CV</span>
            <span>
              <IoMdDownload />
            </span>
          </button>
          <button>
            <FaLinkedinIn />
          </button>
          <button>
            <FaGithub />
          </button>
          <button>
            <FaFacebookF />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
