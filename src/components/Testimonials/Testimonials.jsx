import styled from "styled-components";

import { Title } from "../styles/Title.styled";
import { Component } from "../styles/Component.styled";

const Testimonials = () => {
  return (
    <Component id="testimonials" className="pb-5">
      <Title>Testimonials</Title>
      <Content>
        <Img src="images/person_4.jpg" alt="" />
        <q
          style={{
            display: "block",
            lineHeight: "2",
            margin: "auto",
            marginBottom: "20px",
            width: "80vw"
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          repellendus dolorum aspernatur sequi dolore hic ea sit officia, ullam
          quam autem vitae praesentium in molestiae ipsa delectus, provident
          ducimus suscipit Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Enim velit vitae fugiat molestiae at dicta dolorum optio,
          incidunt placeat beatae laudantium, similique natus maiores officia
          itaque, voluptate harum quos nesciunt?
        </q>
        <H3>Adel Yasser Omer</H3>
      </Content>
      <hr className="mt-5" />
    </Component>
  );
};
const Content = styled.div`
  text-align: center;
  margin: 0 30px 0 30px;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 250px;
  margin-bottom: 20px;
`;
const H3 = styled.h3`
  color: #f16821;
`;
export default Testimonials;
