import TeamMember from "./TeamMember";
import styled from "styled-components";
import { Title } from "../styles/Title.styled";
import { Component } from "../styles/Component.styled";

const Team = () => {
  return (
    <Component id="team">
      <div className="container">
        <Title className="text-uppercase">our team</Title>
        <TeamCollection>
          <TeamMember img="person_1.jpg" name="Adel Yasser" />
          <TeamMember img="person_2.jpg" name="Adele Laurie " />
          <TeamMember img="person_3.jpg" name="Muonic Abram" />
        </TeamCollection>
      </div>
      <hr className="mt-5" />
    </Component>
  );
};

const TeamCollection = styled.div`
  gap: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;
export default Team;
