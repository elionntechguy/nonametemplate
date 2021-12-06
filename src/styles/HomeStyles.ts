import styled from "styled-components";

export const HomeMainContainer = styled.div`
  height: 100vh;
`;

export const HomeSliderContainer = styled.div`
  padding: 50px 20px;

  .home-info {
    padding: 60px;
    background-color: #eeeeee;
    height: 100%;

    @media (max-width: 992px) {
      padding: 20px;
    }

    .home-slider-icons {
      margin-top: 30px;
      display: flex;
      flex-direction: column;

      i {
        font-size: 24px;
      }

      @media (max-width: 992px) {
        margin-top: 0;
        flex-direction: row;
        justify-content: center;
        i {
          padding: 15px;
        }
      }
    }

    .home-info-text {
      p {
        margin-top: 50px;
      }
    }
  }

  .home-slider {
    .carousel {
      .carousel-control-prev,
      .carousel-control-next {
        background-color: #000;
        height: 100px;
        margin-top: auto;
        margin-bottom: auto;
      }

      .carousel-control-prev {
        margin-left: -20px;
      }

      .carousel-control-next {
        margin-right: -20px;
      }
    }
  }
`;
