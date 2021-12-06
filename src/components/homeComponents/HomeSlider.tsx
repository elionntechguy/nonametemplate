import { Container, Col, Row, Carousel } from "react-bootstrap";

import { HomeSliderContainer } from "../../styles/HomeStyles";

import vigi from "../../static/images/vigi.jpg";

export const HomeSlider: React.FC = () => {
  return (
    <>
      <HomeSliderContainer>
        <Container>
          <Row>
            <Col md={6}>
              <div className="home-info">
                <Row>
                  <Col lg={3}>
                    <div className="home-slider-icons">
                      <i className="bi bi-behance"></i>
                      <i className="bi bi-twitter"></i>
                      <i className="bi bi-instagram"></i>
                      <i className="bi bi-linkedin"></i>
                      <i className="bi bi-facebook"></i>
                    </div>
                  </Col>
                  <Col lg={9}>
                    <div className="home-info-text">
                      <h2>
                        I am a professional web designer from San Francisco.
                      </h2>
                      <p>
                        Consectetur adipisicing elit olore iusto cupiditate
                        <br />
                        possimus amet aliquam qui voluptatem. Animi perferendis
                        <br />
                        Minima nemo blanditiis rem odio provident delectus ab
                        <br />
                        magni omnis optio. Architecto debitis mollitia itaque
                        <br />
                        eius accusamu.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="home-slider">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={vigi}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={vigi}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={vigi}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </HomeSliderContainer>
    </>
  );
};
