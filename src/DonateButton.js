import React, { Component } from "react";
import "styled-components/macro";
import ButtonZeroCSS from "./ButtonZeroCSS";
import { BrowserRouter as Router } from "react-router-dom";
const { breakpoints } = require("./design-system");

export default class DonateButton extends Component {
  render() {
    return (
      <Router>
        <ButtonZeroCSS
        onClick={() => window.history.pushState(null, null, '/why-im-running')
      }
          css={`
            margin: 1.7rem 0.5rem 0;
            padding: 15px 24px;
            font-size: 25px;
            font-weight: bold;
            border: 3px solid #fdff8f;
            background: #dfe241;
            border-radius: 0.5rem;
            &:hover {
              background: #fafd5b;
            }
            @media (max-width: ${breakpoints.md}px) {
              font-size: 1.3rem;
            }
          `}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://secure.anedot.com/garlock4cda/city-council-seat-2"
            css={`
              color: #1b4372;
              text-decoration: none;
            `}
          >
            Donate today
          </a>
        </ButtonZeroCSS>
      </Router>
    );
  }
}
