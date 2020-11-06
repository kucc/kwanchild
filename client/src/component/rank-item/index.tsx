import React from "react";
import { STATIC_URL } from "../../constant";

import * as S from "./styles";

interface RankProps {
  ranking: number;
  name: string;
  time: string;
}

const RankItem: React.FC<RankProps> = ({ ranking, name, time }: RankProps) => {
  const insertRankImg = (ranking: number) => {
    switch (ranking) {
      case 1:
        return <img src={STATIC_URL.GOLD_MEDAL} alt="first" />;
      case 2:
        return <img src={STATIC_URL.SILVER_MEDAL} alt="second" />;
      case 3:
        return <img src={STATIC_URL.BRONZE_MEDAL} alt="third" />;
      default:
        return <div>{ranking}</div>;
    }
  };

  return (
    <S.RankItem>
      <S.Ranking>{insertRankImg(ranking)}</S.Ranking>
      <S.Username>{name}</S.Username>
      <S.TotalTime>{time}</S.TotalTime>
    </S.RankItem>
  );
};

export default RankItem;
