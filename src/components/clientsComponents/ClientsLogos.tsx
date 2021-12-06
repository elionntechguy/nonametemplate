import { Row, Col } from "react-bootstrap";

import magneto from "../../static/images/4nobg.png";
import pingdom from "../../static/images/3nobg.png";
import envato from "../../static/images/2nobg.png";
import colorlib from "../../static/images/1nobg.png";

export const ClientsLogos: React.FC = () => {
  return (
    <>
      <div className="clients-logos">
        <Row>
          <Col lg={3}>
            <img src={magneto} alt="magneto" />
          </Col>
          <Col lg={3}>
            <img src={pingdom} alt="pingdom" />
          </Col>
          <Col lg={3}>
            <img src={envato} alt="envato" />
          </Col>
          <Col lg={3}>
            <img src={colorlib} alt="colorlib" />
          </Col>
        </Row>
      </div>
    </>
  );
};
