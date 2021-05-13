/*
This menu will switch between a normal
navigation bar, and a hamburger menu
*/

import React, { Component } from "react";
import "styled-components/macro";
import imgBurger from "./images/burger.svg";
import ButtonZeroCSS from "./ButtonZeroCSS";
import { breakpoints } from "./design-system";
import Flex from "./Flex";

export default class Menu extends Component {
  render() {
    return (
      <Flex>
        {/* Navigation bar (mode) */}
        <Flex
          css={`
            margin: -4rem 1rem 0;
            @media (max-width: ${breakpoints.md}px) {
              display: none;
            }
          `}
        >
          <a
            href="/who-i-am"
            css={`
              display: block;
              margin-right: 2rem;
              padding: 0.55rem 1.2rem;
              font-weight: 600;
              font-size: 1.2rem;
              color: white;
              background: #25374f;
              border-radius: 2rem;
              text-decoration: none;
              transition: background 200ms ease-out;
              border: 1px solid transparent;
              &:hover {
                background: #3a5373;
                border: 1px solid #768ead;
              }
            `}
          >
            Who I am
          </a>
          <a
            href="/get-involved"
            css={`
              display: block;
              margin-right: 2rem;
              padding: 0.55rem 1.2rem;
              font-weight: 600;
              font-size: 1.2rem;
              color: white;
              background: #25374f;
              border-radius: 2rem;
              text-decoration: none;
              transition: background 200ms ease-out;
              border: 1px solid transparent;
              &:hover {
                background: #3a5373;
                border: 1px solid #768ead;
              }
            `}
          >
            Get Involved
          </a>
          <a
            href="/donate"
            css={`
              display: block;
              margin-right: 2rem;
              padding: 0.55rem 1.2rem;
              font-weight: 600;
              font-size: 1.2rem;
              color: white;
              background: #25374f;
              border-radius: 2rem;
              text-decoration: none;
              transition: background 200ms ease-out;
              border: 1px solid transparent;
              &:hover {
                background: #3a5373;
                border: 1px solid #768ead;
              }
            `}
          >
            Donate
          </a>
        </Flex>

        <ButtonZeroCSS
          css={`
            z-index: -2;
            position: absolute;
            top: 0;
            right: 0;
            margin: 1.3rem;
            @media (max-width: ${breakpoints.md}px) {
              z-index: 1;
            }
          `}
          onClick={this.props.toggleMenu}
        >
          <img
            css={`
              width: 1.8rem;
            `}
            src={imgBurger}
            alt="burger"
          />
        </ButtonZeroCSS>
        <Flex
          css={`
            z-index: -2;
            position: absolute;
            top: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
            background: #062c5a;
            color: white;
            opacity: ${this.props.isMenuActive ? 0.97 : 0};
            transition: opacity 500ms ease-out;
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
              Who I am
            </ButtonZeroCSS>
            <ButtonZeroCSS
              css={`
                color: white;
                font-weight: bold;
              `}
            >
              Get Involved
            </ButtonZeroCSS>
            <ButtonZeroCSS
              css={`
                color: white;
                font-weight: bold;
              `}
            >
              Donate
            </ButtonZeroCSS>
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
      </Flex>
    );
  }
}
