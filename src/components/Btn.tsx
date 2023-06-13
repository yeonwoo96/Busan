import React from "react";
import styled from "styled-components";

const BtnWrap = styled.button``;
const Btn = ({ children }) => {
  return <BtnWrap>{children}</BtnWrap>;
};

export default Btn;
