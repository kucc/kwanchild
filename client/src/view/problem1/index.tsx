import React, { useState, useCallback, useEffect, KeyboardEvent } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { STATIC_URL } from "../../constant";

import * as S from "./styles";

const Problem1: React.FC = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const answer = "은수";
  let history = useHistory();

  const checkAnswer = useCallback(() => {
    if (answer === userAnswer) {
      console.log("correct");
      history.push("/problem2");
    } else {
      alert("틀렸습니다!");
    }
  }, [userAnswer]);

  return (
    <S.Problem1>
      <S.ProblemLayout>
        <S.Title>문제 1</S.Title>
        <S.Content>문제 내용이 들어갑니다</S.Content>
        <S.AnswerContainer>
          <S.InputBox
            placeholder="정답을 입력하세요."
            onChange={(e) => {
              setUserAnswer(e.target.value);
              // console.log(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") checkAnswer();
            }}
          ></S.InputBox>
          <S.SubmitButton onClick={checkAnswer}>입력</S.SubmitButton>
        </S.AnswerContainer>
      </S.ProblemLayout>
    </S.Problem1>
  );
};

export default Problem1;
