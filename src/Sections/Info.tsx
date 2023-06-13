import React from "react";
import styled from "styled-components";
import Btn from "../components/Btn";

const InfoContainer = styled.div`
  position: relative;
  margin-top: 100vh;
  width: 100vw;
  height: 100vh;
  z-index: 6;
`;
const Title = styled.h2`
  padding-top: 70px;
  color: transparent;
  span {
    background: url("src/assets/images/main_sub_title_01.svg") no-repeat center
      center / contain;
    width: 80px;
    height: 2.4rem;
    color: transparent;
    display: block;
    margin: 0 auto;
    @media (max-width: 1024px) {
      height: 1.4rem;
    }
  }
`;
const Info = () => {
  return (
    <InfoContainer>
      <Title>
        <span>안내</span>
      </Title>
      <Btn>주요서비스</Btn>
    </InfoContainer>
  );
};

export default Info;
