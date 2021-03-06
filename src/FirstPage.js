import React, { Component } from "react";
import ImageFadeIn from "react-image-fade-in";
import "styled-components/macro";

import imgCoeurDAleneResort from "./images/coeur-d-alene-resort.jpg";
import imgWave from "./images/wave.svg";
import imgWaveMini from "./images/wave-2.svg";
import imgPortrait from "./images/portrait.png";
import imgGradientBg from "./images/gradient-bg.png";
import DonateButton from "./DonateButton";
import Flex from "./Flex";

const { breakpoints } = require("./design-system");

export default class FirstPage extends Component {
  render() {
    return (
      <div
        css={`
          filter: blur(${this.props.isMenuActive ? 20 : 0}px);
          transition: filter 250ms ease-out;
        `}
      >
        {/* 1st Window w/ CDA resort BG */}
        <ImageFadeIn
          src={imgCoeurDAleneResort}
          css={`
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: center center no-repeat;
            background-attachment: fixed;
            background-size: auto 131%;
            background-position-y: bottom;
          `}
        />

        <Flex
          css={`
            width: 100vw;
            height: 100vh;
            background: url(${imgWave}) center center no-repeat fixed
              rgb(13 37 65 / 84%);
            background-attachment: fixed;
            background-size: cover;
          `}
        >
          <Flex
            css={`
              position: absolute;
              bottom: 0;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              width: 100%;
              background: url(${imgWaveMini}) center center no-repeat;
              background-size: 29rem 24rem;
              background-position: 84% 83%;
              @media (max-width: ${breakpoints.md}px) {
                flex-direction: row-reverse;
              }
              @media (max-width: ${breakpoints.sm}px) {
                background-size: 0px;
              }
            `}
          >
            {/* Slogan (visible only for mobile phonew) */}
            <div
              css={`
                display: none;
                @media (max-width: ${breakpoints.sm}px) {
                  z-index: 2;
                  position: absolute;
                  bottom: 27px;
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-flex-direction: column;
                  -ms-flex-direction: column;
                  flex-direction: column;
                  line-height: 3rem;
                  font-size: 3rem;
                  font-family: "Bebas Neue";
                  color: white;
                  & > div {
                    text-align: center;
                  }
                  @media (max-width: ${breakpoints.sm}px) {
                    bottom: 45px;
                    line-height: 3.2rem;
                    font-size: 3.5rem;
                  }
                }
              `}
            >
              <div>A COEUR D'ALENE</div>
              <div>THAT PUTS</div>
              <div>RESIDENTS FIRST</div>
              <DonateButton />
            </div>

            {/* Gradient that provides contrast
            for slogan in mobile mode */}
            <div
              css={`
                z-index: 1;
                position: absolute;
                bottom: 0;
                display: none;
                width: 100vw;
                height: 63vh;
                background: url(${imgGradientBg}) center center no-repeat;
                background-size: cover;
                @media (max-width: ${breakpoints.sm}px) {
                  display: inline-block;
                }
              `}
            />

            {/* Big portrait of Garlock */}
            <ImageFadeIn
              loadAsBackgroundImage
              src={imgPortrait}
              css={`
                position: relative;
                top: 0;
                display: inline-block;
                width: 40rem;
                height: 51rem;
                overflow: hidden;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: bottom;
                @media (max-width: ${breakpoints.lg}px) {
                  width: 25rem;
                  height: 39rem;
                }
                @media (max-width: ${breakpoints.md}px) {
                  transform: rotateY(180deg);
                }
                @media (max-width: ${breakpoints.sm}px) {
                  top: -10vh;
                }
              `}
            />

            {/* Slogan (visible for tablets/desktop devices) */}
            <div
              css={`
                position: relative;
                top: -9rem;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                line-height: 7rem;
                font-size: 7.3rem;
                color: white;
                font-family: "Bebas Neue", sans-serif;
                font-weight: bold;
                @media (max-width: ${breakpoints.xl}px) {
                  top: -5rem;
                }
                @media (max-width: ${breakpoints.lg}px) {
                  line-height: 5.5rem;
                  font-size: 6.3rem;
                }
                @media (max-width: ${breakpoints.md}px) {
                  line-height: 4rem;
                  font-size: 4.3rem;
                }
                @media (max-width: ${breakpoints.sm}px) {
                  display: none;
                  /* position: absolute;
                  align-items: flex-start;
                  margin: 0 0 0 3rem;
                  line-height: 4rem;
                  font-size: 4.3rem; */
                }
              `}
            >
              <div>A COEUR D'ALENE</div>
              <div>THAT PUTS</div>
              <div>RESIDENTS FIRST</div>

              <DonateButton />
            </div>
          </Flex>
        </Flex>
      </div>
    );
  }
}
