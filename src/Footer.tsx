import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
const FooterContainer = styled.div`
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

const Title = styled.h2`
  padding-top: 70px;
  padding-bottom: 70px;
  color: transparent;
  span {
    background: url("src/assets/images/main_sub_title_04.svg") no-repeat center
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
const FooterWrapTop = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.softColor1};
  border-bottom: 1px solid ${(props) => props.theme.softColor1};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SelectContainer = styled.div`
  display: flex;
  @media (min-width: 1640px) {
    width: 1600px;
  }
  @media (max-width: 1640px) {
    width: 90%;
  }
`;
const SiteBtn = styled.div`
  padding: 10px;
  border-left: 1px solid ${(props) => props.theme.softColor1};
  &::after {
    content: ">";
    padding-left: 50px;
  }
  &.related {
    border-right: 1px solid ${(props) => props.theme.softColor1};
  }
`;

const FooterWrapBottom = styled.div`
  box-sizing: border-box;
  width: 90%;
  padding: 20px 0;
  @media (min-width: 1640px) {
    width: 1600px;
  }
  @media (max-width: 1640px) {
    width: 90%;
  }
  overflow: hidden;
`;
const FooterWrapBottom1 = styled.div`
  .top {
    text-align: center;
    display: flex;
    font-size: 18px;
    gap: 12px;
    li {
      &::after {
        content: "|";
        box-sizing: border-box;
        font-size: 12px;
        padding-left: 12px;
        position: relative;
        bottom: 3px;
      }
    }
  }
  .center {
    display: flex;
    .info {
      display: flex;
    }
  }
  .bottom {
  }
`;
const FooterWrapBottom2 = styled.div``;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapTop>
        <SelectContainer>
          <SiteBtn className="business">사업소 사이트</SiteBtn>
          <SiteBtn className="related">관련 사이트</SiteBtn>
        </SelectContainer>
      </FooterWrapTop>
      <FooterWrapBottom>
        <FooterWrapBottom1>
          <ul className="top">
            <li>약관</li>
            <li>저작권 보호정책</li>
            <li className="blue">개인정보 처리방침</li>
            <li>행정서비스헌장</li>
            <li>뷰어다운로드</li>
          </ul>
          <ul className="center">
            <div className="left">부산광역시</div>
            <div className="right">
              <p>(우 47545) 부산광역시 연제구 중앙대로 1001(연산동)</p>
              <ul className="info">
                <li>
                  <a href="#">시청 찾아오시는 길</a>
                </li>
                <li>
                  <a href="#">주차안내</a>
                </li>
                <li>
                  <a href="#">이용안내</a>
                </li>
              </ul>
            </div>
          </ul>
          <p className="copyright bottom">
            Copyright © Busan Metropolitan City. All rights reserved.
          </p>
        </FooterWrapBottom1>
        <FooterWrapBottom2>
          <ul className="sns"></ul>
        </FooterWrapBottom2>
      </FooterWrapBottom>
    </FooterContainer>
  );
};

export default Footer;
