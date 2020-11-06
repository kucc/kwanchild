import styled from "styled-components/macro";

import { THEME_COLOR, BREAKPOINT } from "../../constant";

export const RankItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.3rem 0rem;
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
