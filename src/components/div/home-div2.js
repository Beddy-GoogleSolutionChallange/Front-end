// 추천 멘토/ 상담사 단어

import React from "react";
import styled from "styled-components";

const BgDiv = styled.div`
  background: linear-gradient(144.85deg, #fff7ef 0%, #d7c4e0 99.08%);
  margin: 5% 7.5% 10%;
  padding: 7.5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 13px 1px rgba(97, 104, 159, 0.15);
  border-radius: 28px;
`;

function HomeDiv2() {
  return (
    <BgDiv>
      <div>+ N일째</div>
      <div>
        진정으로 웃으려면 고통을 참아야 하며 나아가 고통을 즐길 줄 알아야 한다
        <br />
        -찰리 채플린-
      </div>
      <div>이 시기의 주요 증상들은 이런 게 있어요!</div>
      <div>이렇게 해보면 좋아요!</div>
      <div>어떨 때 가장 힘든가요? 기록하러 가기 {">"}</div>
    </BgDiv>
  );
}
export default HomeDiv2;
