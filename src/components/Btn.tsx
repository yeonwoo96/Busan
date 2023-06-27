import styled from "styled-components";

const BtnWrap = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: inherit;
  border: 1px solid #111;
  padding: 10px 40px;
  margin: 10px 5px;
  border-radius: 40px;
  @media screen and (max-width: 1400px) {
    padding: 5px 20px;
    font-size: 14px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    padding: 4px 10px;
  }
  &:hover {
    background-color: #e4007e;
    border-color: #e4007e;
    color: #fff;
  }
  &:after {
    content: "+";
    margin-left: 3px;
  }
`;
const Btn = ({ children }: { children: string }) => {
  return <BtnWrap>{children}</BtnWrap>;
};

export default Btn;
