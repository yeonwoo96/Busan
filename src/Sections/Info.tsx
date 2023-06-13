import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  position: relative;
  margin-top: 100vh;
  width: 100vw;
  height: 100vh;
  z-index: 6;
  display: flex;
  flex-flow: column;
`;
const Title = styled.h2`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: transparent;
  span {
    position: relative;
    text-indent: -99999px;
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
    </InfoContainer>
  );
};

export default Info;
