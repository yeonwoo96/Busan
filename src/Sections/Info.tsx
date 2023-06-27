import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Btn from "../components/Btn";
import { BsArrowRightShort } from "react-icons/bs";

const InfoContainer = styled.div`
  margin-top: 100vh;
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  z-index: 6;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const InfoWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 0;
  @media (min-width: 1640px) {
    width: 1600px;
  }
  @media (max-width: 1640px) {
    width: 90%;
  }
  display: flex;
  flex-flow: column;
  align-items: center;
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
const BtnContainer = styled.div`
  max-width: 90%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    gap: 0;
  }
`;
const Appear = keyframes`
  0%{
    opacity: 0;
    transform:translateY(100px);
  }
  100%{
    opacity: 1;
    transform:translateY(0);
  }
`;
const disAppear = keyframes`
0%{
  opacity: 1;
  transform:translateY(0);
}
100%{
  opacity: 0;
  transform:translateY(100px);
}
`;
const CardContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  gap: 1rem;
  margin-top: 40px;
  @media (min-width: 1640px) {
    width: 1600px;
  }
  @media (max-width: 1640px) {
    padding: 0 20px;
  }
  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div<{
  scrollY: number;
  order: number;
  background?: string;
}>`
  position: relative;
  height: 200px;
  border-radius: 26px;
  box-shadow: 15px 15px 50px 1px rgba(51, 51, 51, 0.09);
  transition: 0.4s;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-flow: column;
  opacity: ${(props) => (props.scrollY > 350 ? 1 : 0)};
  animation: ${(props) => (props.scrollY > 350 ? Appear : disAppear)}
    ${(props) => props.order * 0.14 + 0.5 + "s"} ease-in;
  background: url(${(props) => props.background}) no-repeat;
  background-size: 52px;
  background-position: 90% 18%;
  .botBox {
    display: grid;
    gap: 1.2rem;
  }
  &:hover {
    top: -10px;
    left: 5px;
    box-shadow: 15px 15px 5px rgba(51, 51, 51, 0.3);
    transition: 0s;
    border: 4px solid ${(props) => props.theme.hilite};
  }
`;
const Card1 = styled(Card)`
  justify-content: space-between;
  .botBox {
    grid-template-columns: 1fr 1fr;
  }
`;
const Card2 = styled(Card)`
  flex-flow: row;
  align-items: center;
  .title {
    h3 {
      font-weight: 700;
    }
    margin-bottom: 24px;
    margin-right: 24px;
  }
  @media (max-width: 768px) {
    height: 80px;
    .topBox > p {
      display: none;
    }
    h3 {
      font-size: 18px;
      font-weight: 700;
    }
    .title {
      margin-bottom: 0;
    }
  }
`;
const BotBtn = styled.button<{ background: string }>`
  border-radius: 30px;
  background: inherit;
  border: 1px solid ${(props) => props.theme.btnborder};
  height: 32px;
  background: url(${(props) => props.background + ".svg"});
  background-position: center center;
  background-size: auto 14px;
  background-repeat: no-repeat;
  font-size: 0px;
  padding: 5px 40px;
  &:hover {
    background: url(${(props) => props.background + "_w.svg"});
    background-position: center center;
    background-size: auto 14px;
    background-repeat: no-repeat;
    background-color: #e4007e;
    border-color: #e4007e;
  }
`;
const Card3 = styled(Card)`
  background: ${(props) => props.background};
  background-size: cover;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    height: 80px;
    padding: 0 48px;
    .leftBox {
      display: none;
    }
  }
  @media (min-width: 1400px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  h3 {
    color: #fff;
    @media (min-width: 1400px) {
      width: 3.6rem;
    }
  }

  .rightBox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 1400px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 2rem;
    }
  }
`;
const Card4 = styled(Card)`
  background: ${(props) => props.background};
  background-size: cover;
  background-position: 0%;
  display: flex;
  align-items: end;
  gap: 2.4rem;
  .topBox {
    color: #fff;
    span {
      font-size: 14px;
    }
  }
  .botBox {
    width: 300px;
    grid-template-columns: 1fr 1fr;
  }
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  font-size: 20px;
  color: ${(props) => props.theme.softColor1};
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.softColor2};
`;
const BigCircle = styled(Circle)`
  border: none;
  box-sizing: border-box;
  width: 72px;
  height: 72px;
  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  &:hover {
    background-color: ${(props) => props.theme.hilite};
    span {
      color: #fff;
    }
  }
  span {
    font-size: 12px;
  }
`;
const WidthEllipse = styled.div`
  padding: 7px 11px;
  width: 120px;
  border: 1px solid #fff;
  border-radius: 30px;
  font-size: 14px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;
const IconBtnContainer = styled.div`
  margin-top: 70px;
  width: 100%;
  @media (min-width: 1640px) {
    width: 1600px;
  }
  @media (max-width: 1640px) {
    padding: 0 20px;
  }

  overflow: hidden;
`;
const IconBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 1600px;
  }
`;
const IconBtn = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  &:hover {
    & > .bg {
      transform: rotateY(360deg);
      transition: 1s;
    }
  }
  span {
    font-size: 12px;
    white-space: nowrap;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;
const IconBox = styled.div<{ bg: string }>`
  height: 100%;
  width: 100%;
  background-size: cover;
  background: url(${(props) => props.bg}) no-repeat center center;
`;

const Info = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  return (
    <InfoContainer>
      <InfoWrap>
        <Title>
          <span>안내</span>
        </Title>
        <BtnContainer>
          <Btn>주요서비스</Btn>
          <Btn>핵심정책</Btn>
          <Btn>시민참여</Btn>
          <Btn>부산의 공원</Btn>
          <Btn>코로나19</Btn>
          <Btn>방사능 검사결과</Btn>
        </BtnContainer>
        <CardContainer>
          <Card1
            scrollY={scrollPosition}
            order={0}
            background="src/assets/images/ico_news.svg"
          >
            <div className="topBox">
              <div className="title">
                <h3>부산시보</h3>
              </div>
            </div>
            <div className="botBox">
              <BotBtn
                background={
                  "https://www.busan.go.kr/humanframe/global/assets/img/common/busan_news_icon_kor"
                }
              >
                부산이라 좋다
              </BotBtn>
              <BotBtn
                background={
                  "https://www.busan.go.kr/humanframe/global/assets/img/common/busan_news_icon_eng"
                }
              >
                busan is good
              </BotBtn>
              <BotBtn
                background={
                  "https://www.busan.go.kr/humanframe/global/assets/img/common/busan_news_icon_jpn"
                }
              >
                어쩌구
              </BotBtn>
              <BotBtn
                background={
                  "https://www.busan.go.kr/humanframe/global/assets/img/common/busan_news_icon_cn"
                }
              >
                저쩌구
              </BotBtn>
            </div>
          </Card1>
          <Card2
            scrollY={scrollPosition}
            order={1}
            background="src/assets/images/ico_calender.svg"
          >
            <div className="topBox">
              <div className="title">
                <h3>부산시보</h3>
              </div>
              <p>
                간편하게 예약하세요
                <br />
                강좌/교육, 견학/체험, 대관/대여
              </p>
            </div>
            <div className="botBox">
              <Circle>
                <BsArrowRightShort />
              </Circle>
            </div>
          </Card2>
          <Card3
            scrollY={scrollPosition}
            order={2}
            background={"src/assets/images/tour_thum.jpg"}
          >
            <div className="leftBox">
              <h3>문화관광</h3>
            </div>
            <div className="rightBox">
              <BigCircle>
                <span>부산 축제</span>
              </BigCircle>
              <BigCircle>
                <span>문화 갈맷길</span>
              </BigCircle>
              <BigCircle>
                <span>여행 명소</span>
              </BigCircle>
              <BigCircle>
                <span>이색 체험</span>
              </BigCircle>
            </div>
          </Card3>
          <Card4
            scrollY={scrollPosition}
            order={3}
            background={"src/assets/images/bg_mayor_ver9.jpg"}
          >
            <div className="topBox">
              <h3>
                <span>부산광역시장</span> 박형준
              </h3>
            </div>
            <div className="botBox">
              <WidthEllipse>
                공약&매니페스토<span>+</span>
              </WidthEllipse>
              <WidthEllipse>
                시정활동<span>+</span>
              </WidthEllipse>
              <WidthEllipse>
                도시비전<span>+</span>
              </WidthEllipse>
              <WidthEllipse>
                시민열린마루<span>+</span>
              </WidthEllipse>
            </div>
          </Card4>
        </CardContainer>
        <IconBtnContainer>
          <IconBtnWrap>
            <IconBtn>
              <IconBox
                className="bg"
                bg={
                  "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_depart12.svg"
                }
              ></IconBox>
              <span>경제</span>
            </IconBtn>
            <IconBtn>
              <IconBox
                className="bg"
                bg={
                  "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_depart02.svg"
                }
              ></IconBox>
              <span>일자리 교육</span>
            </IconBtn>
            <IconBtn>
              <IconBox
                className="bg"
                bg={
                  "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_depart03.svg"
                }
              ></IconBox>
              <span>사회ㆍ복지</span>
            </IconBtn>
            <IconBtn>
              <IconBox
                className="bg"
                bg={
                  "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_depart04.svg"
                }
              ></IconBox>
              <span>보건ㆍ건강</span>
            </IconBtn>
            <IconBtn>
              <IconBox
                className="bg"
                bg={
                  "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_depart05.svg"
                }
              ></IconBox>
              <span>도시ㆍ건축ㆍ주택</span>
            </IconBtn>
            <IconBtn>
              <IconBox
                className="bg"
                bg={
                  "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_depart06.svg"
                }
              ></IconBox>
              <span>안전</span>
            </IconBtn>
            <IconBtn>
              <IconBox
                className="bg"
                bg={
                  "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_depart07.svg"
                }
              ></IconBox>
              <span>환경보호</span>
            </IconBtn>
            <IconBtn>
              <IconBox
                className="bg"
                bg={
                  "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_depart08.svg"
                }
              ></IconBox>
              <span>교통ㆍ물류</span>
            </IconBtn>
            <IconBtn>
              <IconBox
                className="bg"
                bg={
                  "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_depart13.svg"
                }
              ></IconBox>
              <span>해양농수산</span>
            </IconBtn>
            <IconBtn>
              <IconBox
                className="bg"
                bg={
                  "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_depart10.svg"
                }
              ></IconBox>
              <span>행정</span>
            </IconBtn>
            <IconBtn>
              <IconBox
                className="bg"
                bg={
                  "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_depart14.svg"
                }
              ></IconBox>
              <span>문화체육관광</span>
            </IconBtn>
          </IconBtnWrap>
        </IconBtnContainer>
      </InfoWrap>
    </InfoContainer>
  );
};

export default Info;
