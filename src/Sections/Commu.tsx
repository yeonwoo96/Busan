import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Btn from "../components/Btn";
const CommuContainer = styled.div`
  @media (min-width: 1024px) {
    padding: 100px 0;
  }
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  z-index: 6;
  display: flex;
  flex-flow: column;
  align-items: center;
  h3 {
    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }
    font-size: 25px;
    font-weight: 800;
    color: ${(props) => props.theme.softColor1};
  }
`;
const CommuWrap = styled.div`
  box-sizing: border-box;
  width: 90%;
  padding: 20px 0;
  @media (min-width: 1640px) {
    width: 1600px;
  }
`;
const Title = styled.h2`
  padding-top: 70px;
  padding-bottom: 70px;
  color: transparent;
  span {
    background: url("./assets/images/main_sub_title_03.svg") no-repeat center
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
const Contents = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 1280px) {
    flex-flow: column;
  }
`;
// 섹션 공통영역
const BtnContainer = styled.div`
  display: flex;
  @media (min-width: 1280px) {
    flex-flow: column;
    width: 640px;
    max-width: 40%;
    padding-right: 20%;
  }
  flex-flow: column;
  gap: 1rem;
`;
const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
`;
const CardContainer = styled.div<{ scrollY: number }>`
  opacity: ${(props) => (props.scrollY > 2000 ? 1 : 0)};
  animation: ${(props) => (props.scrollY > 2000 ? Appear : disAppear)} 0.5s
    ease-in;
  display: flex;
  @media (min-width: 1280px) {
    max-width: 52%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1280px) {
    margin-top: 50px;
  }
  width: 100%;
  gap: 2rem;
`;
const Card = styled.div<{ index: number }>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  height: 410px;
  max-width: 330px;
  min-width: 280px;
  overflow: hidden;
  @media (min-width: 1280px) {
    top: ${(props) => (props.index ? null : "100px")};
  }
  .textbox {
    box-sizing: border-box;
    padding: 30px;
  }
  .title {
    display: flex;
    flex-flow: column;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
    /* padding: 30px;
    box-sizing: border-box; */
  }
  &:hover {
    transform: scale(105%);
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
`;

const CardImg = styled.div<{ background: string; bg: boolean }>`
  position: absolute;
  bottom: 0;
  height: ${(props) => (props.bg ? "100%" : "50%")};
  background: url(${(props) => props.background}) center center;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  img {
    display: none;
  }
`;
const CardDetail = [
  {
    Title1: "보도",
    Title2: "자료",
    index: 1,
    Text: "부산시,후쿠시마 오염수 방류 공동 대응을 위한 정부 지원 촉구",
    Photo:
      "https://www.busan.go.kr/imgBBSTY3/20230621/M_062116B0216753-557f3344febe42c382006bf0ca53589a.jpg",
    BgPhoto: false,
    isCircleTitle: false,
  },
  {
    Title1: "보도",
    Title2: "자료",
    index: 2,
    Text: "부산시,후쿠시마 오염수 방류 공동 대응을 위한 정부 지원 촉구",
    Photo:
      "https://www.busan.go.kr/imgARTICLE/20230621/062113B3428150-a66244bd7a004612aecbf512457f96f5.jpg",
    BgPhoto: false,
    isCircleTitle: false,
  },
  {
    Title1: "보도",
    Title2: "자료",
    index: 3,
    Text: "부산시,후쿠시마 오염수 방류 공동 대응을 위한 정부 지원 촉구",
    Photo:
      "https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/radiation_notice.jpg",
    BgPhoto: true,
    isCircleTitle: false,
  },
  {
    Title1: "보도",
    Title2: "자료",
    index: 4,
    Text: "부산시,후쿠시마 오염수 방류 공동 대응을 위한 정부 지원 촉구",
    Photo: "public/assets/images/sotong.jpg",
    BgPhoto: true,
    isCircleTitle: false,
  },
];
const Commu = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  return (
    <CommuContainer>
      <CommuWrap>
        <Title>
          <span>소통</span>
        </Title>
        <Contents>
          <BtnContainer>
            <h4>부산시의 모든 소식을 알려드립니다</h4>
            <BtnWrapper>
              <Btn>보도자료</Btn>
              <Btn>부산시보</Btn>
              <Btn>알림배너</Btn>
              <Btn>부산튜브</Btn>
              <Btn>페이스북</Btn>
              <Btn>블로그</Btn>
              <Btn>엑스포소통</Btn>
              <Btn>엑스포소식</Btn>
              <Btn>소통캐릭터 부기</Btn>
              <Btn>경제브리핑</Btn>
              <Btn>행사&축제</Btn>
              <Btn>오늘의 공연&전시</Btn>
              <Btn>Media Hub</Btn>
              <Btn>Daily Busan</Btn>
            </BtnWrapper>
          </BtnContainer>
          <CardContainer scrollY={scrollPosition}>
            {CardDetail.map((item) => (
              <Card index={item.index % 2}>
                <div className="textbox">
                  <div className="title">
                    <i>{item.Title1}</i>
                    <i>{item.Title2}</i>
                  </div>
                  <div className="text">{item.Text}</div>
                </div>
                <CardImg background={item.Photo} bg={item.BgPhoto}>
                  <img src={item.Photo} />
                </CardImg>
              </Card>
            ))}
          </CardContainer>
        </Contents>
      </CommuWrap>
    </CommuContainer>
  );
};

export default Commu;
