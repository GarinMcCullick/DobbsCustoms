import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 48px;
  margin-bottom: 25px;
  letter-spacing: 0.4rem;
`;

const Container = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
`;

const InnerContainer = styled.div`
  width: 95%;
  height: 95%;
  background-color: lightgrey;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: start;
  border-radius: 25px;
  z-index: 1;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.2);
`;

const ImgContainers = styled.div`
  width: 400px;
  height: 350px;
  border: 1px solid grey;
  background-color: white;
  margin-top: 25px;
  z-index: 2;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.2);
    cursor: default;
  }
`;

export default function Gallery() {
  return (
    <>
      <Container>
        <H1>Past Builds</H1>
        <InnerContainer>
          <ImgContainers>
            <Img src={"/pictures/pic1.jpg"} alt="build pic (unavailable)"></Img>
          </ImgContainers>

          <ImgContainers>
            <Img
              src={"/pictures/pic20.jpg"}
              alt="build pic (unavailable)"
            ></Img>
          </ImgContainers>

          <ImgContainers>
            <Img
              src={"/pictures/pic19.jpg"}
              alt="build pic (unavailable)"
            ></Img>
          </ImgContainers>

          <ImgContainers>
            <Img
              src={"/pictures/pic18.jpg"}
              alt="build pic (unavailable)"
            ></Img>
          </ImgContainers>

          <ImgContainers>
            <Img
              src={"/pictures/pic16.jpg"}
              alt="build pic (unavailable)"
            ></Img>
          </ImgContainers>

          <ImgContainers>
            <Img
              src={"/pictures/pic15.jpg"}
              alt="build pic (unavailable)"
            ></Img>
          </ImgContainers>

          <ImgContainers>
            <Img
              src={"/pictures/pic14.jpg"}
              alt="build pic (unavailable)"
            ></Img>
          </ImgContainers>

          <ImgContainers>
            <Img
              src={"/pictures/pic13.jpg"}
              alt="build pic (unavailable)"
            ></Img>
          </ImgContainers>
        </InnerContainer>
      </Container>
    </>
  );
}
