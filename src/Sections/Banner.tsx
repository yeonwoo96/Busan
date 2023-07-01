import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const BannerWrap = styled.div`
  position: fixed;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  video {
    width: 100vw;
    height: 100%;
    z-index: 1;
    object-fit: cover;
    top: 0;
  }
`;
const SearchBox = styled.div<{ scroll: number }>`
  position: absolute;
  width: 66px;
  height: 66px;
  background-size: 40px;
  border-radius: 50%;
  background: #fff;
  top: calc(75% - ${(props) => props.scroll}px);
  left: calc(50% - 33px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface IBlindBox {
  scroll: number;
}
const BlindBox = styled.div<IBlindBox>`
  z-index: 2;
  width: 100vw;
  height: ${(props) => props.scroll + "px"};
  max-height: 100vh;
  background: #fff;
  position: absolute;
  bottom: 0;
`;
const move = keyframes`
	0%{
    	transform: translate(0, 0);
      opacity:1;
    }
  100%{
    transform: translate(0, 24px);
    opacity: 0;
  }
    `;
const Line = styled.span<{ scroll: number }>`
  position: absolute;
  top: calc(75% + 100px - ${(props) => props.scroll + "px"});
  left: calc(50% - 1px);
  width: 2px;
  height: 60px;
  animation: ${move} 2s infinite ease-in-out;
  background: #fff;
`;
const ScrollMent = styled.span<{ scroll: number }>`
  position: absolute;
  top: calc(75% + 76px - ${(props) => props.scroll + "px"});
  left: calc(50% - 44px);
  font-size: 16px;
  color: #fff;
`;

const Banner = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);
  return (
    <>
      <BannerWrap>
        <video
          src="./assets/videos/main_vod_temp.mp4"
          controls
          poster="./assets/images/poster.png"
        ></video>
        <SearchBox scroll={scroll}>
          <img src="./assets/images/search.png"></img>
        </SearchBox>
        <ScrollMent scroll={scroll}>Scroll down</ScrollMent>
        <Line scroll={scroll}></Line>
        <BlindBox scroll={scroll}></BlindBox>
      </BannerWrap>
    </>
  );
};

export default Banner;
