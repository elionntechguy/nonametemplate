import { Row, Col } from "react-bootstrap";
import { FooterMainContainer } from "../styles/FooterStyles";

export const Footer: React.FC = () => {
  return (
    <FooterMainContainer>
      <div className="footer-main">
        <Row>
          <Col lg={12}>
            <p className="footername">
              © 2020 <b>Zuman.</b> All Rights Reserved.
            </p>
          </Col>
        </Row>
        <Row>
          <Col id="footermiddle" lg={12}>
            <p>
              Created by <b>ixTheme</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col id="footersocial" lg={12}>
            <a href="https://elionntechguy.github.io">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://elionntechguy.github.io">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://elionntechguy.github.io">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://elionntechguy.github.io">
              <i className="bi bi-linkedin"></i>
            </a>
          </Col>
        </Row>
      </div>
    </FooterMainContainer>
  );
};
