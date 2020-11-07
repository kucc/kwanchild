import React, { useState, useCallback, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { STATIC_URL } from "../../constant";
import PAGE_URL from "../../page-config";

import * as S from "./styles";

const Problem2: React.FC = () => {
  let history = useHistory();

  const goNext = useCallback(() => {
    history.push(PAGE_URL.prob3);
  }, []);

  return (
    <S.Problem2>
      <S.ProblemLayout>
        <S.Title>문제 2</S.Title>
        <S.Content>
          어떻게 다음문제로 넘어갈까요? 개발자들의 머릿속을 들여다 보세요!{" "}
        </S.Content>
        <S.Answer onClick={goNext}>여기를 누르는 게 답 !!!</S.Answer>
      </S.ProblemLayout>
    </S.Problem2>
  );
};

export default Problem2;
