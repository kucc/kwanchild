import styled, { keyframes } from "styled-components/macro";
import { Link } from "react-router-dom";

import { fadeIn } from "../../animation/keyframe";
import { THEME_COLOR, BREAKPOINT, STATIC_URL } from "../../constant";

export const Rank = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0rem;

  background-image: url(${STATIC_URL.BACKGROUND});
  position: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  margin-top: 6rem;

  img {
    width: 4rem;
    height: 4rem;
    margin: 0rem 0rem 0rem 2rem;
  }
`;

export const MyRank = styled.div`
  width: 50rem;
  height: 7rem;
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3rem 0rem 0rem 0rem;

  border: 2px solid black;
  border-radius: 1rem;
`;

export const MyRecord = styled.div`
  font-size: 1.9rem;
  margin-right: 1rem;
`;

export const MyTime = styled.div`
  font-size: 1.9rem;
`;

export const RankBox = styled.div`
  width: 50rem;
  height: 50rem;
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0rem;

  border: 2px solid black;
  border-radius: 1rem;
`;

export const Header = styled.div`
  width: 100%;
  height: 4rem;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${THEME_COLOR.GRAYER};
`;

export const Ranking = styled.div`
  width: 5rem;
  font-size: 2rem;
  margin: 0rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 2.6rem;
    height: 2.6rem;
  }
`;

export const Username = styled.div`
  width: 15rem;
  font-size: 2rem;
  margin: 0rem 1rem;
  display: flex;
  align-items: center;
`;

export const TotalTime = styled.div`
  width: 20rem;
  font-size: 2rem;
  margin: 0rem 1rem;
  display: flex;
  align-items: center;
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
`;
