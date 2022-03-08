import styled from "styled-components";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const TeamMember = ({ img, name }) => {
  return (
    <TeamBox>
      <div className="img text-center py-1 mb-4">
        <Img src={`images/${img}`} alt="" />
      </div>
      <p className="fs-2 text-center">{name}</p>
      <p style={{ textAlign: "center", padding: "0 20px" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa tenetur
        quasi voluptatibus quo, eum optio eius similique quas fugiat quae?
      </p>
      <Social>
        <BsFacebook />
        <BsTwitter />
        <BsGoogle />
        <BsInstagram />
      </Social>
    </TeamBox>
  );
};

const TeamBox = styled.div`
  background-color: #fff;
  box-shadow: 0px 5px 13px 0px #3e333347;
  border-radius: 10px;
`;

const Img = styled.img`
  max-width: 75%;
  border-radius: 50%;
`;
const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  font-size: 30px;
  svg {
    cursor: pointer;
  }
  svg:first-of-type:hover {
    color: #4267b2;
  }
  svg:nth-of-type(2):hover {
    color: #1da1f2;
  }
  svg:nth-of-type(3):hover {
    color: #e1306c;
  }
  svg:last-of-type:hover {
    color: #db4a39;
  }
`;
export default TeamMember;
