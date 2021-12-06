import styled from "styled-components";

export const WorkMainContainer = styled.div`
  .nav-tabs {
    .nav-item {
      button {
        color: #000000;
      }
    }
  }
`;

export const WorkCardsContainer = styled.div`
  // height: 100vh;

  // @media (max-width: 992px) {
  //   height: 100vh;
  // }

  .card {
    margin: 20px;
    padding: 0px;
    width: 15rem;
    height: 15rem;
    border-radius: 15rem;

    .card-img-overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 15rem;
      width: 15rem;
      opacity: 0;
      transition: 0.35s ease;
      background: rgba(255, 255, 255, 0.5);
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      .stretched-link {
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          pointer-events: auto;
          content: "";
          background-color: rgba(0, 0, 0, 0);
        }
      }
    }

    &:hover {
      color: #000;
      font-weight: bold;
      text-align: center;
      position: relative;
      opacity: 2;

      .card-img-overlay {
        opacity: 1;
      }
    }

    .card-img {
      padding: 0px;
      width: 15rem;
      height: 15rem;
      border-radius: 15rem;
      filter: grayscale(100%);
    }
  }

  .row {
    .col-lg-4 {
      display: flex;
      justify-content: center;
    }
  }
`;
