import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  position: relative;
  margin-top: 100vh;
  height: 100vh;
  z-index: 6;
`;
const Title = styled.h2`
  color: transparent;
`;
const Info = () => {
  return (
    <InfoContainer>
      <Title>안내</Title>
    </InfoContainer>
  );
};

export default Info;
