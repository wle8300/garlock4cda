/*
Extends HTML <button> and strips
browser vendor CSS styles

Perfect when you need a button that
doesn't have the overhead of MUI's button
like the ripple effect, or extra padding
*/

import React, { Component } from 'react';
import 'styled-components/macro';

export default class ButtonZeroCSS extends Component {
  render() {
    return (
      <button
        {...this.props}
        css={`
          background-color: transparent;
          border: none;
          cursor: pointer;
          outline: none;
          text-decoration: none;
          &:hover {
            
          }
        `}
      >
        {this.props.children}
      </button>
    )
  }
}
