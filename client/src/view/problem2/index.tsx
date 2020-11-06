import React, { useState, useCallback, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { STATIC_URL } from "../../constant";

import * as S from "./styles";

const Problem2: React.FC = () => {
  let history = useHistory();

  const goNext = useCallback(() => {
    history.push("/problem3");
  }, []);

  return (
    <S.Problem2>
      <S.ProblemLayout>
        <S.Title>문제 2</S.Title>
        <S.Content>문제 내용이 들어갑니다</S.Content>
        <S.Answer onClick={goNext}>여기를 누르는 게 답 !!!</S.Answer>
      </S.ProblemLayout>
    </S.Problem2>
  );
};

export default Problem2;
