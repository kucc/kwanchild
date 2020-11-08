import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

const Problem5: React.FC = () => {
  const [userAnswer, setUserAnswer] = useState("");
  let history = useHistory();

  const endGame = useCallback(async () => {
    const result = await fetch("api/problem/done", {
      method: "PATCH",
    });

    if (!result.ok) {
      alert("주작하지 마세요 ㅠㅠ");
      return;
    }

    history.push("/rank");
  }, []);

  const checkAnswer = useCallback(async () => {
    const result = await fetch("api/problem/5", {
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
    endGame();
  }, [userAnswer]);

  return (
    <S.Problem5>
      <S.ProblemLayout>
        <S.Title>문제 5</S.Title>
        <S.Content>
          강관훈은 과외생에게 이상한 사칙연산을 가르치는 중이다. <br />
          이 사람이 말하고 싶은 사칙연산은 대체 뭘까? <br />
          관관훈의 후예들도 그게 궁금한 부분이다.
          <S.HintContainer>
            <S.HintRow>10 – 6 = 0</S.HintRow>
            <S.HintRow> 8 + 10 = 3</S.HintRow>
            <S.HintRow> 8 – 5 = 2</S.HintRow>
            <S.HintRow> 10 + 12 + 6 = ?</S.HintRow>
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
    </S.Problem5>
  );
};

export default Problem5;
