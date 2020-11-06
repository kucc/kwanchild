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

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  margin-top: 6rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25rem;
  font-weight: bold;
`;

export const Button = styled.button`
  text-align: center;
  width: 20rem;
  height: 5rem;
  margin-bottom: 1.5rem;
  background-color: ${THEME_COLOR.PRIMARY};
  border-radius: 3rem;
  border: 0;
  color: white;
  font-size: 2rem;
  letter-spacing: 0.3rem;
  font-weight: 700;
  transition: all 0.2s ease;
  /* cursor: pointer; */
  /* &:hover {
    opacity: 0.5;
    transform: scale(0.9);
  } */
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NameInput = styled.input`
  width: 30rem;
  height: 5rem;
  font-size: 1.8rem;
  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 3rem;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  margin-right: 1.5rem;
  padding: 2.5rem;
`;

export const NameConfirm = styled.button`
  width: 10rem;
  height: 5rem;
  font-size: 2rem;
  border-radius: 3rem;
  outline: none;
  background-color: ${THEME_COLOR.PRIMARY};
  border: 1px solid ${THEME_COLOR.PRIMARY};
  color: white;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
`;
