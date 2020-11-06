import React from "react";
import { STATIC_URL } from "../../constant";
import * as S from "./styles";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "../../component/modal";
import { middleware } from "yargs";
import PAGE_URL from "../../page-config";

const Main: React.FC = () => {
  const [isStart, setStart] = useState(false);
  const [name, setName] = useState("");

  const updateName = useCallback((e) => setName(e.target.value), []);
  let history = useHistory();
  const [showDevModal, setShowDevModal] = useState(false);
  const toggleDevModal = () => setShowDevModal(!showDevModal);

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
    <>
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
          <S.Button onClick={toggleDevModal}>개발자들</S.Button>
        </S.ButtonContainer>
      </S.Main>
      <Modal show={showDevModal} toggleModal={toggleDevModal}>
        <S.ModalDevContainer>
          <S.MemberContainer>
            <S.ModalNameContainer>
              <S.ModalName>박진용</S.ModalName>
            </S.ModalNameContainer>
            <S.UrlContainer>
              <S.GitIcon src={STATIC_URL.GITHUB_ICON}></S.GitIcon>
              <S.GitUrl>https://github.com/namda-on</S.GitUrl>
            </S.UrlContainer>
          </S.MemberContainer>
          <S.MemberContainer>
            {" "}
            <S.ModalNameContainer>
              <S.ModalName>임지수</S.ModalName>
            </S.ModalNameContainer>
            <S.UrlContainer>
              <S.GitIcon src={STATIC_URL.GITHUB_ICON}></S.GitIcon>
              <S.GitUrl>https://github.com/limjisuu</S.GitUrl>
            </S.UrlContainer>
          </S.MemberContainer>
          <S.MemberContainer>
            <S.ModalNameContainer>
              <S.ModalName>홍은수</S.ModalName>
            </S.ModalNameContainer>
            <S.UrlContainer>
              <S.GitIcon src={STATIC_URL.GITHUB_ICON}></S.GitIcon>
              <S.GitUrl>https://github.com/deltaori0</S.GitUrl>
            </S.UrlContainer>
          </S.MemberContainer>

          <S.ModalButtonContainer>
            <S.ModalConfirmButton search onClick={toggleDevModal}>
              확인
            </S.ModalConfirmButton>
          </S.ModalButtonContainer>
        </S.ModalDevContainer>
      </Modal>
    </>
  );
};

export default Main;
