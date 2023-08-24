import React, { Component } from "react";
import Flex from "./Flex";
import "./App.css";
import imgLogo from "./images/logo.svg";
import Menu from "./Menu";
import "styled-components/macro";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const { breakpoints } = require("./design-system");
 
class App extends Component {
  state = {
    isMenuActive: false,
  };

  render() {
    const isLandingPage = window.location.pathname === "/";

    return (
      <Router>
        <div
          css={`
            height: ${isLandingPage ? "100vh" : "inherit"};
          `}
        >
          {/* 1st Window w/ Wave BG */}
          <div
            css={`
              min-height: 100vh;
              background-attachment: fixed;
              background-size: cover;
            `}
          >
            {/* Navbar */}
            <Flex
              css={`
                z-index: 3;
                position: fixed;
                top: 0;
                justify-content: space-between;
                width: 100vw;
                background: ${isLandingPage
                  ? `transparent`
                  : "hsl(212deg 34% 32% / 100%)"};
                box-shadow: ${isLandingPage
                  ? `none`
                  : "0 10px 20px 0px hsl(212deg 34% 32% / 100%)"};
              `}
            >
              {/* Logo */}
              <div>
                <a
                  href="/"
                  css={`
                    display: inline-block;
                    margin: 2rem 1.8rem;
                    width: 13rem;
                    height: 7rem;
                    background: url(${imgLogo}) center center no-repeat;
                    background-size: contain;
                    cursor: pointer;
                    text-decoration: none;
                    &:hover {
                      opacity: 0.9;
                    }
                    @media (max-width: ${breakpoints.md}px) {
                      margin: 1rem;
                      width: 9rem;
                      height: 5rem;
                    }
                  `}
                >
                  &nbsp;
                </a>
              </div>
              {/* Menu items */}
              <Menu
                toggleMenu={this.toggleMenu}
                isMenuActive={this.state.isMenuActive}
              />
            </Flex>

            <Switch>
              <Route path="/why-im-running">
                <SecondPage isMenuActive={this.state.isMenuActive} />
              </Route>
              <Route path="/">
                <FirstPage isMenuActive={this.state.isMenuActive} />
              </Route>
            </Switch>
          </div>

          <div
            css={`
              z-index: 1;
              width: 100vw;
              position: fixed;
              bottom: 0;
              padding: 0 0 0.5rem;
              font-size: 18px;
              font-family: "Bebas Neue", sans-serif;
              color: white;
              mix-blend-mode: overlay;
            `}
          >
            <Flex>Paid for by Garlock4CDA, Richard Price, Treasurer</Flex>
          </div>
        </div>
      </Router>
    );
  }

  toggleMenu = () => {
    setTimeout(() => {
      this.setState({ isMenuActive: !this.state.isMenuActive });
    }, 200);
  };
}

export default App;
