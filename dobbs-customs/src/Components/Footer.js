import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  overflow-x: visable;
  width: 100%;
  height: auto;
  padding-bottom: 50px;
  background-color: darkgrey;
  color: white;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 90%;
  height: 100%;
`;

const Column1 = styled.div`
  width: 20%;
  text-align: center;
`;

const Column2 = styled.div`
  width: 20%;
  text-align: center;
`;

const Column3 = styled.div`
  width: 20%;
  height: 10%;
  align-self: end;
  text-align: center;
`;

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <Column1></Column1>
        <Column2></Column2>
        <Column3>© 2022 Garin McCullick. All Rights Reserved</Column3>
      </InnerContainer>
    </Container>
  );
}
