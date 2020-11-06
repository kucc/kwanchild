import React, { useState, useCallback, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { STATIC_URL } from "../../constant";

import * as S from "./styles";

const Problem3: React.FC = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const answer = "hungry";
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
    <S.Problem3>
      <S.ProblemLayout>
        <S.Title>문제 3</S.Title>
        <S.Content>
          지수는 방에서 온라인 강의를 듣고 있었다. 교수님의 설명을 들으면서
          워드에 필기를 하다가 꾸벅꾸벅 꿈나라로 가려는 순간 ... 갑자기 창문으로
          고양이가 뛰어 들어왔다 ! 고양이는 노트북 위를 파바밧 돌아다니기
          시작했다. 고양이가 남긴 자국은 다음과 같다. 이 고양이는 무엇을 말하고
          싶었던 것일까? 고양이의 마음을 읽어 보자, meow !
          <S.HintContainer>.... ..m m. mm. .m. m.mm</S.HintContainer>
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
    </S.Problem3>
  );
};

export default Problem3;
