import styled, { keyframes } from "styled-components/macro";
import { Link } from "react-router-dom";

import { fadeIn } from "../../animation/keyframe";
import { THEME_COLOR, BREAKPOINT, STATIC_URL } from "../../constant";

export const Problem1 = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0rem;

  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${STATIC_URL.BACKGROUND});
  position: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProblemLayout = styled.div`
  width: 50%;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 4rem;
  font-weight: bold;
  color: black;
  z-index: 100;
  margin: 2rem 0rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 70%;
  font-size: 2rem;
  color: black;
  z-index: 100;
  margin: 1rem 0rem 1rem 0rem;
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
  margin: 1rem 0rem;
`;

export const InputBox = styled.input`
  width: 40rem;
  font-size: 1.8rem;
  height: 3.8rem;

  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};

  background-color: ${THEME_COLOR.GRAY};
  border-radius: 0.5rem;

  padding: 1rem 1rem;
  margin-right: 1rem;
`;

export const SubmitButton = styled.button`
  display: block;
  position: relative;
  width: 7rem;
  height: 3.8rem;
  background-color: ${THEME_COLOR.PRIMARY};
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.8rem;
`;

export const NextPage = styled(Link)``;
