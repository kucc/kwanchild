import React, { useState, useCallback, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { STATIC_URL } from "../../constant";
import PAGE_URL from "../../page-config";

import * as S from "./styles";

const Problem4: React.FC = () => {
  const [userAnswer, setUserAnswer] = useState("");
  let history = useHistory();

  const checkAnswer = useCallback(async () => {
    const result = await fetch("/problem/4", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: userAnswer,
      }),
    });
    if (!result.ok) {
      alert("틀렸습니다!");
      return;
    }
    history.push(PAGE_URL.prob5);
  }, [userAnswer]);

  return (
    <S.Problem4>
      <S.ProblemLayout>
        <S.Title>문제 4</S.Title>
        <S.Content>
          나를 찾아 봐!
          <S.HintContainer>
            {`I   l   I   l   I   l   I   l   I   I   I   l   I   I   I`} <br />
            {`I   I   l   l   I   l   I   l   I   l   l   l   I   l   l`} <br />
            {`I   l   l   l   I   l   I   l   I   l   l   l   I   l   l`} <br />
            {`I   I   l   l   I   l   I   l   I   l   l   l   I   l   l`} <br />
            {`I   l   I   l   I   I   I   l   I   I   I   l   I   I   I`} <br />
          </S.HintContainer>
        </S.Content>
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
    </S.Problem4>
  );
};

export default Problem4;
