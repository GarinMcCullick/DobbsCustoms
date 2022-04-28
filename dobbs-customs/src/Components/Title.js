import React from "react";
import styled from "styled-components";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";

const Container = styled.div`
  background-color: rgb(128, 128, 128, 95%);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align: top;
  width: 100%;
  height: 75px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 100;
`;

const InnerContainer = styled.div`
  background-color: white;
  width: 50%;
  height: 75%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const H1 = styled.h1`
  color: black;
  text-align: center;
  letter-spacing: 0.5rem;
  font-family: serif;
  @media only screen and (min-width: 1200px) {
    font-size: 50px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 50px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 600px) and (max-width: 767px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 22px;
  }
`;

const Div = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 0.9rem;
  margin-right: 1rem;
  width: 15%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Phone = styled.p`
  color: black;
  &:hover {
    animation-name: trin;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    cursor: pointer;
  }
  @keyframes trin {
    from {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    20%,
    32%,
    44%,
    56%,
    68% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    23%,
    35%,
    47%,
    59%,
    71% {
      transform: rotate3d(0, 0, 1, 15deg);
    }
    26%,
    38%,
    50%,
    62%,
    74% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    29%,
    41%,
    53%,
    65%,
    77% {
      transform: rotate3d(0, 0, 1, -15deg);
    }
    80% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
`;

const Email = styled.p`
  color: black;
  &:hover {
    animation-name: trin;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    cursor: pointer;
  }
  @keyframes trin {
    from {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    20%,
    32%,
    44%,
    56%,
    68% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    23%,
    35%,
    47%,
    59%,
    71% {
      transform: rotate3d(0, 0, 1, 15deg);
    }
    26%,
    38%,
    50%,
    62%,
    74% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    29%,
    41%,
    53%,
    65%,
    77% {
      transform: rotate3d(0, 0, 1, -15deg);
    }
    80% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
`;

const Smartphone = styled(GiSmartphone)`
  color: lightgreen;

  @media only screen and (min-width: 1200px) {
    font-size: 50px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 50px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 35px;
  }

  @media only screen and (min-width: 600px) and (max-width: 767px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const OutlineMail = styled(HiOutlineMail)`
  color: skyblue;

  @media only screen and (min-width: 1200px) {
    font-size: 50px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 50px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 35px;
  }

  @media only screen and (min-width: 600px) and (max-width: 767px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export default function Title() {
  return (
    <Container>
      <InnerContainer>
        <H1>Dobbs Customs</H1>
        <Div>
          <Phone>
            <Smartphone />
          </Phone>
          <Email>
            <OutlineMail />
          </Email>
        </Div>
      </InnerContainer>
    </Container>
  );
}
