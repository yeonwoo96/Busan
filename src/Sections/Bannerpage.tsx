import { useState } from "react";
import styled from "styled-components";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const BPContainer = styled.div`
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
const BPWrap = styled.div`
  box-sizing: border-box;
  width: 90%;
  padding: 20px 0;
  @media (min-width: 1640px) {
    width: 1600px;
  }
  overflow: hidden;
`;
const Title = styled.h2`
  padding-top: 70px;
  padding-bottom: 70px;
  color: transparent;
  span {
    background: url("./assets/images/main_sub_title_04.svg") no-repeat center
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
  align-items: flex-start;
  justify-content: space-between;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
const BannerContainer = styled.div`
  width: 100%;
  height: 450px;

  position: relative;
`;
const CircleContainer = styled.ul<{ on: number }>`
  margin-top: 40px;
  margin-bottom: 70px;
  display: flex;
  gap: 1rem;
  & > li:nth-child(${(props) => props.on}) {
    width: 20px;
    background: ${(props) => props.theme.hilite};
  }
`;
const Circle = styled.li`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.softColor2};
`;
const AlertBtn = styled.div`
  padding: 18px 100px;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.thickColor};
  min-width: 100px;
  &:before {
    background: url("https://www.busan.go.kr/humanframe/theme/busan22/assets/img/main/svg/ico_img.svg");
    &:hover {
      background-image: url(../img/main/svg/ico_img_w.svg);
    }
  }
  &:hover {
    background-color: ${(props) => props.theme.thickColor};
    color: #fff;
  }
`;
const LeftBtn = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  font-size: 40px;
  cursor: pointer;
`;
const RightBtn = styled.span`
  position: absolute;
  right: 0;
  top: 50%;
  font-size: 40px;
  cursor: pointer;
`;
const BannerDetail = [
  {
    bg: "BAN1.png",
    page: 1,
  },
  {
    bg: "BAN2.jpg",
    page: 2,
  },
  {
    bg: "BAN3.jpg",
    page: 3,
  },
  {
    bg: "BAN4.jpg",
    page: 4,
  },
  {
    bg: "BAN5.jpg",
    page: 5,
  },
  {
    bg: "BAN6.jpg",
    page: 6,
  },
  {
    bg: "BAN7.jpg",
    page: 7,
  },
  {
    bg: "BAN8.jpg",
    page: 8,
  },
];
const Banners = styled.div<{ page: number }>`
  height: 450px;
  width: 100%;
  display: float;
  align-items: center;
  grid-template-rows: 1fr;
  justify-content: space-between;
  position: relative;
  transition: right 0.3s ease-in;
  left: calc(30%);
  transform: translate(${(props) => -((props.page - 1) * 48) + "%"});
  transition: transform 0.3s;
  /* left: calc(50% - 448px); */
`;
const Banner = styled.div<{ bg: string; itempage: number; page: number }>`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  /* width: 40%;
  height: 80%; */
  width: 48%;
  height: 75%;
  transform: scale(${(props) => (props.itempage == props.page ? 1.33 : null)});
  z-index: ${(props) => (props.itempage == props.page ? 2 : 1)};
  opacity: ${(props) => (props.itempage == props.page ? 1 : 0.3)};
  background: url(${(props) => props.bg}) center no-repeat;
  background-size: cover;
  border-radius: 40px;
  position: relative;
  right: 40px;
`;
console.log(BannerDetail.length);
const Bannerpage = () => {
  const [page, setpage] = useState(1);
  const pageUp = () => {
    if (page !== 8) {
      setpage((cur) => cur + 1);
    }
  };
  const pageDown = () => {
    if (page !== 1) {
      setpage((cur) => cur - 1);
    }
  };
  return (
    <BPContainer>
      <BPWrap>
        <Title>
          <span>소통</span>
        </Title>
        <Contents>
          <BannerContainer>
            <Banners page={page}>
              {BannerDetail.map((item) => (
                <Banner
                  itempage={item.page}
                  page={page}
                  bg={"./assets/images/" + item.bg}
                ></Banner>
              ))}
            </Banners>
            <LeftBtn onClick={pageDown}>
              <GoChevronLeft />
            </LeftBtn>
            <RightBtn onClick={pageUp}>
              <GoChevronRight />
            </RightBtn>
          </BannerContainer>
          <CircleContainer on={page}>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
          </CircleContainer>
          <AlertBtn>부산시 알림배너</AlertBtn>
        </Contents>
      </BPWrap>
    </BPContainer>
  );
};

export default Bannerpage;
