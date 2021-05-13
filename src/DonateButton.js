import React, { Component } from "react";
import 'styled-components/macro'
import ButtonZeroCSS from "./ButtonZeroCSS";

const { breakpoints } = require("./design-system");

export default class DonateButton extends Component {
  render() {
    return (
      <ButtonZeroCSS
        css={`
          margin: 1.7rem 0.5rem 0;
          padding: 0.6rem 0.8rem;
          font-size: 1.9rem;
          color: #1b4372;
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
        onClick={() => alert("redirects to donate page")}
      >
        Donate
      </ButtonZeroCSS>
    );
  }
}
