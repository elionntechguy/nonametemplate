import { Container } from "react-bootstrap";

import { AboutMainContainer } from "../styles/AboutStyles";

import { AboutSkills } from "../components/aboutComponents/AboutSkills";

export const About: React.FC = () => {
  return (
    <div className="about-main">
      <AboutMainContainer>
        <Container>
          <AboutSkills />
        </Container>
      </AboutMainContainer>
    </div>
  );
};
