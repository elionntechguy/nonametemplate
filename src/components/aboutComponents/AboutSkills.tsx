import { Row, Col } from "react-bootstrap";
import SkillBar from "react-skillbars";

import { AboutSkillsContainer } from "../../styles/AboutStyles";

const skills: { type: string; level: number }[] = [
  { type: "Web Development", level: 90 },
  { type: "Brand Identity", level: 70 },
  { type: "Logo Design", level: 90 },
];

let colors: { bar: string; title: { text: string; background: string } } = {
  bar: "#C4C4C4",
  title: {
    text: "#fff",
    background: "#000000",
  },
};

export const AboutSkills: React.FC = () => {
  return (
    <>
      <AboutSkillsContainer>
        <Row>
          <Col lg={6}>
            <div className="skillbar-main">
              <SkillBar skills={skills} colors={colors} />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-info">
              <h1>I have high skills in developing and programming</h1>
              <h5>
                I am working on a professional, visually <br /> sophisticated
                and technologically proficient, <br /> responsive and
                multi-functional personal <br /> portfolio template Shane.
              </h5>
            </div>
          </Col>
        </Row>
      </AboutSkillsContainer>
    </>
  );
};
