import React, { Component } from "react";
import "styled-components/macro";

import { BrowserRouter as Router } from "react-router-dom";

const { breakpoints } = require("./design-system");

export default class FirstPage extends Component {
  state = {
    isAnimated: false,
  };

  render() {
    return (
      <Router>
        <div
          css={`
            height: 100%;
            transform: translateY(${this.state.isAnimated ? "0px" : "30px"});
            opacity: ${this.state.isAnimated ? 1 : 0};
            transition: transform 250ms ease-out, opacity 250ms ease-out;
            background: hsl(212deg 34% 32% / 100%);
          `}
        >
          <div
            css={`
              margin: 140px auto;
              padding: 30px 30px 200px;
              color: white;
              border-radius: 9px;
              & > div {
                font-size: 23px;
                margin-bottom: 18px;
              }
              @media (max-width: ${breakpoints.sm}px) {
                margin: 100px auto;
                & div {
                  font-size: 21px;
                }
              }
              @media (min-width: ${breakpoints.lg}px) {
                width: 640px;
              }
            `}
          >
            <h2
              css={`
                font-size: 39px;
              `}
            >
              Why I'm Running
            </h2>
            <div>
              I am Roger Garlock and I’m running for City Council, Seat 2. We
              live in the fastest growing city in one of the fastest growing
              states in the nation. This has unprecedented impacts on our city,
              our citizens and on our quality of life. The entire region is
              looking for solutions and Coeur d’Alene should be involved in that
              planning.
            </div>
            <div>
              I want to bring a logical and responsive approach to this process
              to achieve results that have the least impact on our
              infrastructure, environment, and schools. I am not willing to
              surrender our city’s character or sacrifice our neighborhoods in
              that process. Let’s keep Coeur d’Alene, the Coeur d’Alene.
            </div>
            <div>
              Do we want to live in a city of high-rise condos and apartments?
              Do we want to lose our family neighborhoods? We are at a point
              when we must decide if we will continue to let the developers and
              their agencies set the course for our city or if we, you and me,
              will have a voice in our future. We are here because Coeur d’Alene
              still feels like home for us, our families, and our friends. It
              will not be easy to keep it as the city we love but I am up to
              tough challenges and face them daily in my work.
            </div>
            <div>
              I work with those most impacted by the growth and cost-of-living
              increases in Coeur d’Alene. Over the past 18 years, I have worked
              with at-risk youth, the homeless and those at risk of losing their
              homes, and now deal with helping those coming out of prison find a
              productive place in our community. Few of these people are
              hardened criminals. Most became involved in drugs, a deep-seated
              problem that has existed for many years in north Idaho.{" "}
            </div>
            <div>
              Due to my experience, I want to review the city’s budget each time
              it comes before the City Council and make sure we have proper
              funding for our Police Department and Fire Department. Our growth
              puts more demands on the police and emergency services, and we
              need to make sure those demands can be met.
            </div>
            <div>
              For the past 18 years, I have created opportunities and change for
              people who have no voice. Help me take that experience to City
              Council. I want to be your voice as we deal with the tough issues
              facing us, including growth, crime, taxes and our City's budget.
            </div>
            <div>
              I am Roger Garlock, running for Seat 2, Coeur d’Alene City
              Council. I would appreciate your vote.
            </div>
          </div>
        </div>
      </Router>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isAnimated: true });
    }, 1);
  }
}
