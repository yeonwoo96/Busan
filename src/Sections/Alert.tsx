import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
const AlertContainer = styled.div`
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
const AlertWrap = styled.div`
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
    background: url("src/assets/images/main_sub_title_02.svg") no-repeat center
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
const Contents = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
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
const Article1 = styled.article<{ scrollY: number }>`
  width: 100%;
  opacity: ${(props) => (props.scrollY > 1300 ? 1 : 0)};
  animation: ${(props) => (props.scrollY > 1300 ? Appear : disAppear)} 0.5s
    ease-in;
  .top {
    width: 32%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1400px) {
      width: 100%;
    }
  }
  .bot {
    margin-top: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    @media (max-width: 1024px) {
      width: calc(150% + 2rem);
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 768px) {
      width: calc(300% + 4rem);
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

const Article2 = styled.article`
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-flow: column;
    gap: 2.4rem;
  }
`;
const Section = styled.section`
  width: 100%;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
const GoBtn = styled.div`
  width: 48px;
  height: 24px;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.thickColor};
  transition: all 0.3s;
  &::after {
    content: "+";
  }
  &:hover {
    background: ${(props) => props.theme.thickColor};
    color: #fff;
  }
`;
const Card = styled.div`
  width: 100%;
  border-radius: 30px;
  box-shadow: 2px 2px 20px 10px rgba(0, 0, 0, 0.05);
  height: 180px;
  border-radius: 40px;
  box-sizing: border-box;
  padding: 30px;
  h4 {
    margin-bottom: 20px;
  }
`;
const CardText = [
  {
    title: "제9회 대한민국 공무원상 심의 후보자 공개검증",
    text: "제9회 대한민국 공무원상 심의 후보자 공개검증 정부포상 업무지침에 따라 대한민국 공무원상 심의 후보자를 붙임과 같이 공개하여 국민의 의견을 수렴하고자 합니다. 의견이 있으신 분은 2023.7.5.(수)까지 전자우편을 통해 제출하여 주시기 바랍니다. □ 대한민국 공무원상 개요 ○ 주관 : 인사혁신처 ○ 근거 : 「대한민국 공무원상」 규정(인사혁신처 훈령) ○ 목적 : 국가주요 시책과제를 성공적으로 추진한 공무원을 발굴·포상하고 인사상 우대함으로써 능력과 성과 중심의 공직문화를 정착시키고자 함 ○ 훈격 : 훈장, 포장, 대통령표창, 국무총리표창 □ 공개검증 ○ 기 간 : 2023. 6. 19.(월) ~ 7. 5.(수) ○ 의견제출 : 전자우편(hyunysk@korea.kr) ○ 관련문의 : 인사과(051-888-1964) □ 참고사항 ○ 제출된 의견에 대해서는 별도 회신하지 않으며, 심사 참고자료로 활용할 계획임 ○ 심의후보자는 본심사(공적심사)를 거쳐 최종 포상대상자로 선발 예정 ※ 붙임의 심의후보자 중 공적심사 등의 절차를 통해 선정된 자에 한하여 포상 수여 예정",
  },
  {
    title: "부산시보(국·영·중·일) 무료 구독 신청 이벤트 당첨자 알림",
    text: "부산시보(국·영·중·일) 무료 구독 신청 이벤트에 참여해 주신 모든 시민께 감사드립니다. 이벤트에 참여하신 시민분들 중 추첨을 통해 10분께 모바일 상품권을 발송합니다. 이벤트 당첨자 명단은 첨부물을 참고해 주시기 바랍니다.앞으로도 부산시보(국·영·중·일)에 대한 부산시민 여러분들의 많은 관심과 참여 부탁드립니다. ",
  },
  {
    title: "2023년 원전 중소기업과의 현장간담회 개최 안내",
    text: `우리 시에서는 원전 중소기업에 대한 맞춤형 정보제공 및 기업 애로사항을 청취하는 소통의 장을 마련하여 향후 지역 원전산업의 경쟁력을 확보하고자 "2023년 원전 중소기업과의 현장간담회"를 붙임과 같이 개최하오니, 바쁘시더라도 많은 관심과 참여바랍니다.`,
  },
];
const Alert = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  return (
    <AlertContainer>
      <AlertWrap>
        <Title>
          <span>알림</span>
        </Title>
        <Contents>
          <Article1 scrollY={scrollPosition}>
            <div className="top">
              <h3>공지사항</h3>
              <GoBtn>go</GoBtn>
            </div>
            <div className="bot">
              {CardText.map((item) => (
                <Card>
                  <h4>{item.title}</h4>
                  <p>{item.text.slice(0, 75)}...</p>
                </Card>
              ))}
            </div>
          </Article1>
          <Article2>
            <Section>
              <div className="top">
                <h3>고시공고</h3>
                <GoBtn>go</GoBtn>
              </div>
              <hr />
            </Section>
            <Section>
              <div className="top">
                <h3>채용정보</h3>
                <GoBtn>go</GoBtn>
              </div>
              <hr />
            </Section>
            <Section>
              <div className="top">
                <h3>시험공고</h3>
                <GoBtn>go</GoBtn>
              </div>
              <hr />
            </Section>
          </Article2>
        </Contents>
      </AlertWrap>
    </AlertContainer>
  );
};

export default Alert;
