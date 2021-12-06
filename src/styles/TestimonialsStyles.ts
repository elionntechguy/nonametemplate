import styled from "styled-components";

export const TestimonialsMainContainer = styled.div`
  height: 700px;

  margin-top: 15%;

  .card {
    padding: 20px;
    width: 80%;
  }

  .testimonial-slider {
    display: flex;
    justify-content: center;

    .carousel {
      padding: 40px;

      * {
        color: #000;
      }

      .carousel-indicators {
        button {
          background-color: #000 !important;
        }
      }

      .testimonial-img {
        display: flex;
        justify-content: center;
        overflow: hidden;
        width: 33%;
        padding-bottom: 33%;
        height: 0;
        position: relative;

        img {
          width: 70%;
          height: 70%;
          position: absolute;
          clip-path: circle(50%);
          object-fit: cover;
        }
      }

      .testimonial-desc {
        .testimonial-name,
        .testimonial-title {
          text-align: center;
        }
      }
    }

    .carousel-control-prev {
      display: none;
    }

    .carousel-control-next {
      display: none;
    }
  }
`;
