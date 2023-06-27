import { useEffect, useState } from "react";
import styled from "styled-components";

interface IHeaderContainer {
  scroll: number;
}
const HeaderContainer = styled.div<IHeaderContainer>`
  li {
    cursor: pointer;
  }
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  transition: height 0.4s ease-in-out;
  z-index: 9999;
  height: 45px;
  background: ${(props) =>
    props.scroll === 0 ? props.theme.gradient : "#fff"};
  color: ${(props) => (props.scroll === 0 ? "#fff" : props.theme.thickColor)};
  @media screen and (min-width: 1280px) {
    height: 110px;
  }
`;
const LogoWrap = styled.div`
  height: 45px;
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: center;
  @media screen and (min-width: 1280px) {
    height: 110px;
  }
`;
const Logo = styled.img`
  height: 70%;
  cursor: pointer;
`;
const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 90%;
  display: flex;
  margin: auto;
  @media (min-width: 1640px) {
    width: 1600px;
  }
`;
const MenuContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 14px;
  @media screen and (min-width: 1280px) {
    padding-bottom: 20px;
  }
`;
const MenuWrap1 = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  ul {
    display: flex;
    gap: 1rem;
  }
  @media screen and (min-width: 1280px) {
  }
`;
const MenuWrap2 = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
const Pageul = styled.ul<{ scroll: number }>`
  display: block;
  position: absolute;
  height: 60px;
  top: 60px;
  left: calc(50% - 500px);
  width: 1000px;
  display: flex;
  justify-content: space-between;
  font-size: 21px;
  line-height: 30px;
  li {
    position: relative;
    width: 100%;
    text-align: center;
    &:hover {
      color: ${(props) => (props.scroll !== 0 ? props.theme.hilite : null)};
      & {
        text-decoration: ${(props) =>
          props.scroll === 0 ? "underline" : null};
        text-underline-position: under;
      }
    }
    &::after {
      content: " ";
      position: absolute;
      top: 10px;
      right: 0;
      width: 1px;
      height: 13px;
      background: #ccc;
    }
    &:last-child::after {
      content: none;
    }
  }
`;

const IconulWrap = styled.div`
  position: relative;
  .iconul {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1.8rem;
    position: absolute;
    top: 25px;
    right: 0;
    li {
      width: 30px;
    }
  }
`;
interface IHambuger {
  scroll: number;
}
const Hambuger = styled.li<IHambuger>`
  height: 24px;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  .hidden {
    display: none;
  }

  span {
    width: 100%;
    height: 2px;
    background: ${(props) =>
      props.scroll === 0 ? "#fff" : props.theme.thickColor};
    &:nth-child(3) {
      width: 70%;
    }
  }
`;
const BlindMenu = styled.div<{ height: number | string }>`
  height: ${(props) => props.height};
  transition: height 0.3s ease-in-out;
  background: #fff;
  height: ${(props) => props.height};
  color: ${(props) => props.theme.thickColor};
  overflow: hidden;
  border-top: 1px solid #f1f1f1;
`;
const BlindWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 1000px;
  justify-content: space-between;
  height: 100%;
  ul {
    padding: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    border-right: 1px solid #f1f1f1;
    flex-flow: column;
    gap: 1rem;
    &:nth-child(1) {
      border-left: 1px solid #f1f1f1;
    }
    li {
      &::before {
        content: "- ";
      }
    }
  }
`;
const Header = () => {
  const [BlindMenuHeight, setBlindMenuHeight] = useState<number | string>(0);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);
  return (
    <HeaderContainer scroll={scroll}>
      <HeaderWrapper>
        <LogoWrap className="LogoWrap">
          <Logo
            onClick={() => window.scrollTo({ left: 0, top: 0 })}
            src={
              scroll === 0
                ? "src/assets/images/logoWhite.svg"
                : "src/assets/images/logoColor.svg"
            }
          />
        </LogoWrap>
        <MenuContainer>
          <MenuWrap1>
            <ul>
              <li>로그인</li>
              <li>회원가입</li>
              <li>행정전화부</li>
              <li>사이트맵</li>
              <li>kor</li>
            </ul>
          </MenuWrap1>
          <MenuWrap2>
            <Pageul
              scroll={scroll}
              onMouseOver={() => {
                setScroll(1);
                setBlindMenuHeight("400px");
                console.log("on");
              }}
              onMouseLeave={() => {
                setScroll(window.scrollY);
                setBlindMenuHeight(0);
              }}
            >
              <li>부산민원120</li>
              <li>부산소식</li>
              <li>정보공개</li>
              <li>부산소개</li>
              <li>분야별정보</li>
            </Pageul>
            <IconulWrap>
              <ul className="iconul">
                <li>
                  <img
                    src={
                      scroll === 0
                        ? "src/assets/images/searchWhite.png"
                        : "src/assets/images/search.png"
                    }
                  />
                </li>
                <Hambuger scroll={scroll}>
                  <span className="hidden"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Hambuger>
              </ul>
            </IconulWrap>
          </MenuWrap2>
        </MenuContainer>
      </HeaderWrapper>
      <BlindMenu
        height={BlindMenuHeight}
        onMouseOver={() => {
          setBlindMenuHeight("400px");
        }}
        onMouseLeave={() => {
          setBlindMenuHeight(0);
        }}
      >
        <BlindWrapper>
          <ul>
            <li>민원신청</li>
            <li>제안신청</li>
            <li>시민참여</li>
            <li>민원안내</li>
            <li>120콜센터</li>
          </ul>
          <ul>
            <li>부산소식</li>
            <li>새소식</li>
            <li>부산시보</li>
            <li>보도·해명자료</li>
            <li>공고</li>
            <li>부산시 공식SNS</li>
            <li>시정사진</li>
          </ul>
          <ul>
            <li>주요시책</li>
            <li>정보공개</li>
            <li>예산</li>
            <li>감사정보</li>
            <li>지방공기업</li>
            <li>계약정보</li>
          </ul>
          <ul>
            <li>부산의 오늘</li>
            <li>부산의 상징</li>
            <li>부산시청 안내</li>
            <li>부산의 인물</li>
            <li>부산의 역사</li>
            <li>부산통계</li>
            <li>도시브랜드</li>
            <li>주민자치회</li>
          </ul>
          <ul>
            <li>경제</li>
            <li>일자리·교육</li>
            <li>사회복지</li>
            <li>보건·건강</li>
            <li>도시·건축·주택</li>
            <li>안전</li>
            <li>환경보호</li>
            <li>교통·물류</li>
            <li>해양농수산</li>
            <li>행정</li>
            <li>문화체육관광</li>
          </ul>
        </BlindWrapper>
      </BlindMenu>
    </HeaderContainer>
  );
};

export default Header;
