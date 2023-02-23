// 추천 멘토/ 상담사 단어

import React from "react";
import styled from "styled-components";



const StyledWordsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function HomeDiv2() {

    return (<StyledWordsContainer>
        <p>추천 멘토/ 상담사</p>
    </StyledWordsContainer>
    );
}
export default HomeDiv2;