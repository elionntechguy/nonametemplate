import { useState } from "react";

import { Container, Col, Row, Card } from "react-bootstrap";

import { WorkCardsContainer } from "../../styles/WorkStyles";

import vigi from "../../static/images/vigi.jpg";

import { WorkModal } from "./WorkModal";

interface Props {
  selectedTab: string;
}

export const WorkCards: React.FC<Props> = ({ selectedTab }) => {
  const [whichCard, setWhichCard] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <WorkModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        whichCard={whichCard}
      />
      <WorkCardsContainer>
        <Container>
          {(selectedTab === "all" && (
            <Row>
              <Col lg={4}>
                <Card>
                  <Card.Img src={vigi} alt="Card image" />
                  <Card.ImgOverlay>
                    <div
                      role="button"
                      className="stretched-link"
                      onClick={() => {
                        setWhichCard("1");
                        setShowModal(true);
                      }}
                    >
                      <Card.Text>Click to see more</Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col lg={4}>
                <Card>
                  <Card.Img src={vigi} alt="Card image" />
                  <Card.ImgOverlay>
                    <div
                      role="button"
                      className="stretched-link"
                      onClick={() => {
                        setWhichCard("2");
                        setShowModal(true);
                      }}
                    >
                      <Card.Text>Click to see more</Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col lg={4}>
                <Card>
                  <Card.Img src={vigi} alt="Card image" />
                  <Card.ImgOverlay>
                    <div
                      role="button"
                      className="stretched-link"
                      onClick={() => {
                        setWhichCard("3");
                        setShowModal(true);
                      }}
                    >
                      <Card.Text>Click to see more</Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          )) ||
            (selectedTab === "web" && (
              <Row>
                <Col lg={4}>
                  <Card>
                    <Card.Img src={vigi} alt="Card image" />
                    <Card.ImgOverlay>
                      <div
                        role="button"
                        className="stretched-link"
                        onClick={() => {
                          setWhichCard("1");
                          setShowModal(true);
                        }}
                      >
                        <Card.Text>Click to see more</Card.Text>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card>
                    <Card.Img src={vigi} alt="Card image" />
                    <Card.ImgOverlay>
                      <div
                        role="button"
                        className="stretched-link"
                        onClick={() => {
                          setWhichCard("2");
                          setShowModal(true);
                        }}
                      >
                        <Card.Text>Click to see more</Card.Text>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card>
                    <Card.Img src={vigi} alt="Card image" />
                    <Card.ImgOverlay>
                      <div
                        role="button"
                        className="stretched-link"
                        onClick={() => {
                          setWhichCard("3");
                          setShowModal(true);
                        }}
                      >
                        <Card.Text>Click to see more</Card.Text>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
            )) ||
            (selectedTab === "uiux" && (
              <Row>
                <Col lg={4}>
                  <Card>
                    <Card.Img src={vigi} alt="Card image" />
                    <Card.ImgOverlay>
                      <div
                        role="button"
                        className="stretched-link"
                        onClick={() => {
                          setWhichCard("1");
                          setShowModal(true);
                        }}
                      >
                        <Card.Text>Click to see more</Card.Text>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card>
                    <Card.Img src={vigi} alt="Card image" />
                    <Card.ImgOverlay>
                      <div
                        role="button"
                        className="stretched-link"
                        onClick={() => {
                          setWhichCard("2");
                          setShowModal(true);
                        }}
                      >
                        <Card.Text>Click to see more</Card.Text>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card>
                    <Card.Img src={vigi} alt="Card image" />
                    <Card.ImgOverlay>
                      <div
                        role="button"
                        className="stretched-link"
                        onClick={() => {
                          setWhichCard("3");
                          setShowModal(true);
                        }}
                      >
                        <Card.Text>Click to see more</Card.Text>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
            )) ||
            (selectedTab === "branding" && (
              <Row>
                <Col lg={4}>
                  <Card>
                    <Card.Img src={vigi} alt="Card image" />
                    <Card.ImgOverlay>
                      <div
                        role="button"
                        className="stretched-link"
                        onClick={() => {
                          setWhichCard("1");
                          setShowModal(true);
                        }}
                      >
                        <Card.Text>Click to see more</Card.Text>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card>
                    <Card.Img src={vigi} alt="Card image" />
                    <Card.ImgOverlay>
                      <div
                        role="button"
                        className="stretched-link"
                        onClick={() => {
                          setWhichCard("2");
                          setShowModal(true);
                        }}
                      >
                        <Card.Text>Click to see more</Card.Text>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card>
                    <Card.Img src={vigi} alt="Card image" />
                    <Card.ImgOverlay>
                      <div
                        role="button"
                        className="stretched-link"
                        onClick={() => {
                          setWhichCard("3");
                          setShowModal(true);
                        }}
                      >
                        <Card.Text>Click to see more</Card.Text>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
            ))}
        </Container>
      </WorkCardsContainer>
    </>
  );
};
