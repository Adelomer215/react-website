import { useState } from "react";

import styled from "styled-components";
import { Component } from "../styles/Component.styled";
import { Title } from "../styles/Title.styled";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Images } from "./WorkData";

const Work = () => {
  const [current, setCurrent] = useState(0);
  const length = Images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <Component id="services">
      <Title className="text-uppercase">our work</Title>
      <Gallery>
        <BsFillArrowLeftCircleFill className="left-arrow" onClick={prevSlide} />
        <BsFillArrowRightCircleFill
          className="right-arrow"
          onClick={nextSlide}
        />
        {Images.map((ele, idx) => {
          return (
            <div
              key={idx}
              className={idx === current ? "slide active" : "slide"}
            >
              {idx === current && (
                <img src={ele.image} alt="travelImage" className="image" />
              )}
            </div>
          );
        })}
      </Gallery>
    </Component>
  );
};

const Gallery = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Work;
