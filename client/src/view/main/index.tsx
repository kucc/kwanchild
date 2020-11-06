import React from "react";
import { STATIC_URL } from "../../constant";
import * as S from "./styles";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import PAGE_URL from "../../page-config";

const Main: React.FC = () => {
  const [isStart, setStart] = useState(false);
  const [name, setName] = useState("");

  const updateName = useCallback((e) => setName(e.target.value), []);
  let history = useHistory();

  const submitName = useCallback(async () => {
    const response = await fetch(`user/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        startTime: new Date(),
      }),
    });
    return response;
  }, [name]);

  const confirmName = useCallback(async () => {
    const isConfirmed = window.confirm(`${name} 으로 플레이하시겠습니까?`);
    if (!isConfirmed) return;
    const isUniqueNickname = await submitName();
    if (!isUniqueNickname.ok) {
      alert("이미 존재하는 닉네임 입니다 ㅋㅋ");
      return;
    }
    setStart(true);
  }, [name]);

  const confirmStart = useCallback(async () => {
    const response = await fetch(`user/start`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log(response.body);
      alert("ㅋㅋ?");
      return;
    }

    history.push(PAGE_URL.prob1);
  }, []);

  return (
    <S.Main>
      <S.Title>문제적 KUCC</S.Title>
      <S.ButtonContainer>
        {isStart ? (
          <S.Button onClick={confirmStart}>시작하기</S.Button>
        ) : (
          <S.NameContainer>
            <S.NameInput
              onChange={updateName}
              value={name}
              placeholder="닉네임을 입력해 주세요"
              onKeyDown={(e) => {
                if (e.key === "Enter") confirmName();
              }}
            ></S.NameInput>
            <S.NameConfirm onClick={confirmName}>확인</S.NameConfirm>
          </S.NameContainer>
        )}
        <S.Button>개발자들</S.Button>
      </S.ButtonContainer>
    </S.Main>
  );
};

export default Main;
