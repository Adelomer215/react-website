import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <Container className="container">
        <Info>
          <h3 className="text-uppercase">about me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            porro earum neque similique, excepturi autem, velit labore debitis
            voluptatibus ullam minus dicta veritatis! Suscipit quis
            reprehenderit dolorum tempore illum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            porro earum neque similique,
          </p>
          <Ul>
            <li>
              <FaCheck style={{ color: "aqua", marginRight: "5px" }} /> Lorem
              ipsum dolor sit.
            </li>
            <li>
              <FaCheck style={{ color: "aqua", marginRight: "5px" }} />
              Doloremque debitis voluptate mollitia!
            </li>
            <li>
              <FaCheck style={{ color: "aqua", marginRight: "5px" }} /> Soluta
              impedit reprehenderit unde.
            </li>
          </Ul>
        </Info>
        <ImgDiv>
          <img src="images/img_3.jpg" alt="" />
        </ImgDiv>
      </Container>
    </section>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px 20px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media (max-width: 768px) {
    height: 50vh;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50vh;
`;
const Ul = styled.ul`
  list-style-type: none;
`;
const ImgDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  img {
    max-width: 125%;
  }
`;
export default About;
