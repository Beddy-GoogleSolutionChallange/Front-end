// 멘토 추천 슬라이더-> 크기 조정 필요
// 이거 참고 https://velog.io/@cookncoding/React-slick%EC%97%90-styled-components-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  overflow:hidden;
  height: 153px;
`;

const StyledSlider = styled(Slider)`
    .slick-slide  div{
      outline: none;
      width: 100;
    }
`;

const ImageContainer = styled.div`
  margin: 0 16px;

`;

const Image = styled.img`
max-width:100%;
max-height:100%;
`;



const items = [
  { id: 1, url: "https://picsum.photos/200/300" },
  { id: 2, url: "https://picsum.photos/600/500" },
  { id: 3, url: "https://picsum.photos/700/600" },
  { id: 4, url: "https://picsum.photos/500/400" },
  { id: 5, url: "https://picsum.photos/200/300" },
  { id: 6, url: "https://picsum.photos/800/700" },
  { id: 7, url: "https://picsum.photos/300/400" },
  
];


export default class CardSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
    };
    return (
      <Container>
        <StyledSlider {...settings} 
        >
          {items.map(item => {
            return (
              <div style={{ width: 100 }} key={item.id}  >
                <ImageContainer >
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}