import Flex from "./Flex";
import "./App.css";
import imgWave from "./images/wave.svg";
import imgWaveMini from "./images/wave-2.svg";
import imgLogo from "./images/logo.svg";
import imgCoeurDAleneResort from "./images/coeur-d-alene-resort.jpg";
import imgPortrait from "./images/portrait.png";
import ButtonZeroCSS from "./ButtonZeroCSS";
import "styled-components/macro";

function App() {
  return (
    <div className="App">
      {/* 1st Window w/ CDA resort BG */}
      <div
        css={`
          z-index: -1;
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: url(${imgCoeurDAleneResort}) center center no-repeat;
          background-attachment: fixed;
          background-size: auto 131%;
          background-position-y: bottom;
        `}
      />

      {/* 1st Window w/ Wave BG */}
      <div
        css={`
          width: 100vw;
          height: 100vh;
          background: hsl(212deg 34% 32% / 86%) url(${imgWave}) center center
            no-repeat;
          background-attachment: fixed;
          background-size: cover;
        `}
      >
        {/* Navbar */}
        <Flex
          css={`
            justify-content: space-between;
          `}
        >
          {/* Logo */}
          <div>
            <div
              href="/"
              css={`
                display: inline-block;
                margin: 2rem 1.8rem;
                width: 13rem;
                height: 7rem;
                background: url(${imgLogo}) center center no-repeat;
                background-size: contain;
                cursor: pointer;
                &:hover {
                  opacity: 0.9;
                }
              `}
            />
          </div>
          {/* Menu items */}
          <Flex
            css={`
              margin: -4rem 1rem 0;
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
        </Flex>

        {/* Portrait of Garlock & C.T.A. */}
        <Flex
          css={`
            position: absolute;
            bottom: 0;
            width: 100%;
            background: url(${imgWaveMini}) center center no-repeat;
            background-size: 29rem 24rem;
            background-position: 84% 83%;
          `}
        >
          {/* big image of garlock */}
          <div
            css={`
              display: inline-block;
              width: 40rem;
              height: 51rem;
              background: url(${imgPortrait}) center center no-repeat;
              background-size: contain;
              background-position: bottom;
            `}
          />
          {/* slogan and call-to-action */}
          <div
            css={`
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              margin: 11.3rem -1rem 0 0;
              line-height: 7rem;
              font-size: 7.3rem;
              color: white;
              font-family: "Bebas Neue", sans-serif;
              font-weight: bold;
            `}
          >
            <div>A COEUR D'ALENE</div>
            <div>THAT PUTS</div>
            <div>RESIDENTS FIRST</div>

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
              `}
              onClick={() => alert("redirects to donate page")}
            >
              Donate
            </ButtonZeroCSS>
          </div>
        </Flex>
      </div>
    </div>
  );
}

export default App;
