import styled, { keyframes } from "styled-components/macro";

import { fadeIn } from "../../animation/keyframe";
import { THEME_COLOR, BREAKPOINT, STATIC_URL } from "../../constant";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0rem;
  animation: ${fadeIn} 0.5s linear;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    margin-top: 3rem;
  }
  background-image: url(${STATIC_URL.BACKGROUND});
  position: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
