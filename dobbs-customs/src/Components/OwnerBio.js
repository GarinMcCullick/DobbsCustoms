import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: 550px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  border: 1px solid black;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: #3b3b3b;
  border-radius: 1%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.2);
`;

const Pic = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const H3 = styled.h3`
  width: 35%;
  height: auto;
  font-size: 32px;
  text-align: center;
  border-bottom: 2px solid #b28228;
  padding-bottom: 0.1rem;
  color: #b28228;
`;

const P = styled.p`
  width: 90%;
  height: 250px;
  font-size: 24px;
  text-indent: 20px;
  line-height: 2rem;
  color: #3b3b3b;
  background-color: #b28228;
  padding: 0.5rem;
`;

export default function OwnerBio() {
  return (
    <Container>
      <Pic>
        <Img src="/pictures/Owner1.png" alt="Unavailable"></Img>
      </Pic>
      <H3>Laine Dobbs</H3>
      <P>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic
      </P>
    </Container>
  );
}
