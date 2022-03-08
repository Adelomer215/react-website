import styled from "styled-components";

import { Title } from "../styles/Title.styled";
import { Component } from "../styles/Component.styled";
const Contact = () => {
  return (
    <Component className="pb-5">
      <div className="container">
        <Title>Contact</Title>
        <form action="">
          <Group className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </Group>
          <Group className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
          </Group>
          <Group className="form-group">
            <input type="text" className="form-control" placeholder="subject" />
          </Group>
          <Group>
            <textarea
              className="form-control"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </Group>
          <button className="btn btn-lg btn-warning text-uppercase w-100">
            send message
          </button>
        </form>
      </div>
    </Component>
  );
};
const Group = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
`;
export default Contact;
