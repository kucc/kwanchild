import React, { useEffect, useState } from "react";
import RankItem from "../rank-item";
import * as S from "./styles";

interface Rank {
  name: string;
  time: number;
}
const RankList: React.FC = () => {
  const [ranks, setRank] = useState([]);
  useEffect(() => {
    const getUserRanking = async () => {
      const result = await fetch("/rank", {
        method: "GET",
      });

      if (!result.ok) {
        alert("서버 죽음");
        return;
      }
      const rankList = await result.json();
      setRank(rankList);
    };

    getUserRanking();
  }, []);

  return (
    <S.RankList>
      {ranks.map((rank: Rank, idx) => {
        <RankItem ranking={idx} name={rank.name} time={`${rank.time}초`} />;
      })}
    </S.RankList>
  );
};

export default RankList;
