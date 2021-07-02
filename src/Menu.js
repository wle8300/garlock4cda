/*
This menu will switch between a normal
navigation bar, and a hamburger menu
*/

import React, { Component } from "react";
import ButtonZeroCSS from "./ButtonZeroCSS";
import { breakpoints } from "./design-system";
import { Sling as Hamburger } from "hamburger-react";
import Flex from "./Flex";
import { BrowserRouter as Router } from "react-router-dom";
import ImageFadeIn from "react-image-fade-in";
import "styled-components/macro";

import imgFacebook from "./images/facebook.svg";
import imgYouTube from "./images/youtube.svg";
import imgTwitter from "./images/twitter.svg";
import imgGab from "./images/gab.svg";

export default class Menu extends Component {
  render() {
    return (
      <Router>
        <Flex>
          {/* Normal Navbar */}
          <div
            css={`
              margin: -4rem 2rem 0;
              @media (max-width: ${breakpoints.md}px) {
                display: none;
              }
            `}
          >
            {/* Navigation bar (mode) */}
            <Flex>
              <a
                href="/why-im-running"
                css={`
                  display: block;
                  margin-right: 2rem;
                  padding: 0.55rem 1.2rem;
                  font-weight: 600;
                  font-size: 1.2rem;
                  color: white;
                  background: rgb(14 40 74 / 90%);
                  border-radius: 2rem;
                  text-decoration: none;
                  transition: background 200ms ease-out;
                  border: 1px solid transparent;
                  &:hover {
                    background: #002b61;
                    border: 1px solid rgb(59 118 194);
                  }
                `}
              >
                Who I Am
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://secure.anedot.com/garlock4cda/city-council-seat-2"
                css={`
                  display: block;
                  margin-right: 4rem;
                  padding: 0.55rem 1.2rem;
                  font-weight: 600;
                  font-size: 1.2rem;
                  color: white;
                  background: rgb(14 40 74 / 90%);
                  border-radius: 2rem;
                  text-decoration: none;
                  transition: background 200ms ease-out;
                  border: 1px solid transparent;
                  &:hover {
                    background: #002b61;
                    border: 1px solid rgb(59 118 194);
                  }
                `}
              >
                Donate
              </a>
            </Flex>
            <Flex
              css={`
                position: absolute;
                top: 35px;
                right: 25px;
                flex-direction: column;
                justify-content: flex-end;
              `}
            >
              <a href="https://www.facebook.com/Garlock4CDA">
                <ImageFadeIn
                  src={imgFacebook}
                  css={`
                    margin-bottom: 1rem;
                    width: 41px;
                    cursor: pointer;
                    filter: opacity(50%);
                    &:hover {
                      filter: opacity(70%);
                    }
                  `}
                />
              </a>
              <a href="https://www.facebook.com/Garlock4CDA">
                <ImageFadeIn
                  src={imgYouTube}
                  css={`
                    margin-bottom: 1rem;
                    width: 41px;
                    cursor: pointer;
                    filter: opacity(50%);
                    &:hover {
                      filter: opacity(70%);
                    }
                  `}
                />
              </a>
              <a href="https://www.facebook.com/Garlock4CDA">
                <ImageFadeIn
                  src={imgTwitter}
                  css={`
                    margin-bottom: 1rem;
                    width: 41px;
                    cursor: pointer;
                    filter: opacity(50%);
                    &:hover {
                      filter: opacity(70%);
                    }
                  `}
                />
              </a>
              <a href="https://www.facebook.com/Garlock4CDA">
                <ImageFadeIn
                  src={imgGab}
                  css={`
                    margin-bottom: 1rem;
                    width: 41px;
                    cursor: pointer;
                    filter: opacity(50%);
                    &:hover {
                      filter: opacity(70%);
                    }
                  `}
                />
              </a>
            </Flex>
          </div>

          {/* Mobile Navbar */}
          <div>
            <div
              css={`
                z-index: 10000 !important;
                position: absolute;
                top: 0;
                right: 0;
                display: none;
                margin: 1.3rem;
                @media (max-width: ${breakpoints.md}px) {
                  display: block;
                  z-index: 1;
                }
              `}
            >
              <Hamburger
                toggled={this.props.isMenuActive}
                toggle={this.props.toggleMenu}
                color="#FFFFFF"
                size={35}
              />
            </div>

            <Flex
              css={`
                z-index: -2;
                position: absolute;
                top: 0;
                right: 0;
                width: 100vw;
                height: 100vh;
                transform: translateY(
                  ${this.props.isMenuActive ? "0vh" : "-100vh"}
                );
                background: #062c5a;
                color: white;
                opacity: ${this.props.isMenuActive ? 0.92 : 0};
                transition: opacity 250ms ease-out;
                @media (max-width: ${breakpoints.md}px) {
                  z-index: ${this.props.isMenuActive ? 3 : -2};
                }
              `}
            >
              <Flex
                css={`
                  flex-direction: column;
                  & > button {
                    font-size: 2rem;
                    margin: 1rem;
                    background: #024593;
                    padding: 0.45rem 1rem;
                    border-radius: 6px;
                    &:hover {
                      background: #005ed8;
                    }
                  }
                `}
              >
                <ButtonZeroCSS
                  css={`
                    color: white;
                    font-weight: bold;
                  `}
                >
                  <a
                    href="/why-im-running"
                    css={`
                      color: white;
                      text-decoration: none;
                    `}
                  >
                    Who I Am
                  </a>
                </ButtonZeroCSS>
                {/* <ButtonZeroCSS
              css={`
                color: white;
                font-weight: bold;
              `}
            >
              <a
                href="/no-question-is-dumb"
                css={`
                  color: white;
                  text-decoration: none;
                `}
              >
                No Question Is Dumb™
              </a>
            </ButtonZeroCSS> */}
                <ButtonZeroCSS
                  css={`
                    color: white;
                    font-weight: bold;
                  `}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://secure.anedot.com/garlock4cda/city-council-seat-2"
                    css={`
                      color: white;
                      text-decoration: none;
                    `}
                  >
                    Donate
                  </a>
                </ButtonZeroCSS>
                <div
                  css={`
                    padding-top: 1rem;
                  `}
                >
                  <a
                    href="https://www.facebook.com/Garlock4CDA"
                    css={`
                      display: inline-block;
                    `}
                  >
                    <ImageFadeIn
                      src={imgFacebook}
                      css={`
                        margin-right: 2.6rem;
                        width: 41px;
                        cursor: pointer;
                        filter: opacity(50%);
                        &:hover {
                          filter: opacity(70%);
                        }
                      `}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/Garlock4CDA"
                    css={`
                      display: inline-block;
                    `}
                  >
                    <ImageFadeIn
                      src={imgYouTube}
                      css={`
                        margin-right: 2.6rem;
                        width: 41px;
                        cursor: pointer;
                        filter: opacity(50%);
                        &:hover {
                          filter: opacity(70%);
                        }
                      `}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/Garlock4CDA"
                    css={`
                      display: inline-block;
                    `}
                  >
                    <ImageFadeIn
                      src={imgTwitter}
                      css={`
                        margin-right: 2.6rem;
                        width: 41px;
                        cursor: pointer;
                        filter: opacity(50%);
                        &:hover {
                          filter: opacity(70%);
                        }
                      `}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/Garlock4CDA"
                    css={`
                      display: inline-block;
                    `}
                  >
                    <ImageFadeIn
                      src={imgGab}
                      css={`
                        margin-right: 2.6rem;
                        width: 41px;
                        cursor: pointer;
                        filter: opacity(50%);
                        &:hover {
                          filter: opacity(70%);
                        }
                      `}
                    />
                  </a>
                </div>
              </Flex>
              <ButtonZeroCSS
                css={`
                  position: absolute;
                  bottom: 0;
                  width: 100vw;
                  padding: 1.5rem 0;
                  text-align: center;
                  color: white;
                  font-weight: bold;
                  font-size: 1.25rem;
                  background: #005ed8;
                  &:hover {
                    background: #137aff;
                  }
                `}
                onClick={this.props.toggleMenu}
              >
                CLOSE
              </ButtonZeroCSS>
            </Flex>
          </div>
        </Flex>
      </Router>
    );
  }
}
