import React from "react";
import NavBar from "../NavBar/NavBar";
import styled from "styled-components";

const Header = () => {
  return (
    <header id="home">
      <NavBar />
      <HContent>
        <h1 className="text-white">I am Front End</h1>
        <h5 className="text-white">Freelancer</h5>
        <StartBtn
          href="https://onedrive.live.com/edit.aspx?cid=dc0e51a8c95e087f&page=view&resid=DC0E51A8C95E087F!136500&parId=DC0E51A8C95E087F!189&app=Word"
          target="_blank"
          className="btn btn-lg"
        >
          Get Start
        </StartBtn>
      </HContent>
    </header>
  );
};

const HContent = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  background-image: url(images/header.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StartBtn = styled.a`
  background-color: #f16821;
  color: #fff;
  margin-top: 1rem;
`;
export default Header;
