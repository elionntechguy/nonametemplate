import styled from "styled-components";

export const FooterMainContainer = styled.div`
  overflow-x: hidden;

  .footer-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #eaeaea;
    height: 250px;
    width: 100%;

    .row {
      display: flex;
      justify-content: center;

      .col-lg-12 > p {
        text-align: center;
      }
    }

    #footersocial {
      display: flex;
      justify-content: center;
    }

    #footersocial > a {
      color: #292b2c;
      padding: 10px;
      padding-top: 0;
    }

    #footersocial > a > i {
      font-size: 1.4rem;
    }

    #footersocial > a:hover {
      text-decoration: none;
    }

    #footermiddle {
      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 970px) {
    .footer {
      height: 250px;
    }
  }

  @media only screen and (max-width: 768px) {
    #footersocial > a {
      text-align: center;
    }
  }

  @media only screen and (max-width: 767px) {
    .footer {
      height: 500px;
    }
    #footerrow {
      padding: 20px;
    }
    #footermiddle {
      padding: 20px;
    }
    #footersocial {
      padding: 20px;
    }
  }
`;
