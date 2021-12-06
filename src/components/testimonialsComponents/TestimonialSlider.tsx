import { Container, Card, Carousel, Row, Col } from "react-bootstrap";

import vigi from "../../static/images/vigi.jpg";

export const TestimonialSlider: React.FC = () => {
  return (
    <Container>
      <div className="testimonial-slider">
        <Card>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col lg={6} className="testimonial-img">
                  <img src={vigi} alt="" />
                </Col>
                <Col lg={6} className="testimonial-desc">
                  <h4 className="testimonial-name">Alien Kopil</h4>
                  <p className="testimonial-title">CEO - Notun Inc.</p>
                  <p className="testimonial-description">
                    Lorem ipsum dolor sit amet omnis consectetur adipisicing
                    elit empora quia forem ipsum dolorsiempora aspernatur
                    dolore, sapiente quidem sequi non tenetur harum, nihil quis
                    beatae rerum ipsa nemo quae voluptate, repellendus nostrum
                    debitis velit nisi.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col lg={6} className="testimonial-img">
                  <img src={vigi} alt="" />
                </Col>
                <Col lg={6} className="testimonial-desc">
                  <h4 className="testimonial-name">Alien Kopil</h4>
                  <p className="testimonial-title">CEO - Notun Inc.</p>
                  <p className="testimonial-description">
                    Lorem ipsum dolor sit amet omnis consectetur adipisicing
                    elit empora quia forem ipsum dolorsiempora aspernatur
                    dolore, sapiente quidem sequi non tenetur harum, nihil quis
                    beatae rerum ipsa nemo quae voluptate, repellendus nostrum
                    debitis velit nisi.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col lg={6} className="testimonial-img">
                  <img src={vigi} alt="" />
                </Col>
                <Col lg={6} className="testimonial-desc">
                  <h4 className="testimonial-name">Alien Kopil</h4>
                  <p className="testimonial-title">CEO - Notun Inc.</p>
                  <p className="testimonial-description">
                    Lorem ipsum dolor sit amet omnis consectetur adipisicing
                    elit empora quia forem ipsum dolorsiempora aspernatur
                    dolore, sapiente quidem sequi non tenetur harum, nihil quis
                    beatae rerum ipsa nemo quae voluptate, repellendus nostrum
                    debitis velit nisi.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Card>
      </div>
    </Container>
  );
};
