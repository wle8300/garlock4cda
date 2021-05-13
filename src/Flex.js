import React, { Component } from "react";
import "styled-components/macro";

export default class Flex extends Component {
  render() {
    
    const { ...other } = this.props;

    return (
      <div
        {...other}
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {this.props.children}
      </div>
    );
  }
}
