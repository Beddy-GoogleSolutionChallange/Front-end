// 추천 멘토/ 상담사, 모두 보기 가로 정렬

import React from "react";
import styled from "styled-components";



const StyledWordsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function HomeDiv1() {

    return (<StyledWordsContainer>
        <p>추천 멘토/ 상담사</p>
        <p>모두 보기 ∨</p>
    </StyledWordsContainer>
    );
}
export default HomeDiv1;