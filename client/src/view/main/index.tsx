import React from "react";
import { STATIC_URL } from "../../constant";
import * as S from "./styles";
import { useCallback, useState } from "react";

// const [isStart, setStart] = useState(false);

const Main: React.FC = () => {
  let isStart = false;
  const confirmName = useCallback(async () => {
    // setStart(!isStart);
    isStart = true;
    console.log(isStart);
  }, []);

  return (
    <S.Main>
      <S.Title>문제적 KUCC</S.Title>
      <S.ButtonContainer>
        {isStart ? (
          <S.Button>시작하기</S.Button>
        ) : (
          <S.NameContainer>
            <S.NameInput placeholder="닉네임을 입력해 주세요"></S.NameInput>
            <S.NameConfirm onClick={confirmName}>확인</S.NameConfirm>
          </S.NameContainer>
        )}
        <S.Button>개발자들</S.Button>
      </S.ButtonContainer>
    </S.Main>
  );
};

export default Main;
