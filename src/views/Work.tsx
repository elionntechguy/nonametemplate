import { Container, Tabs, Tab } from "react-bootstrap";

import { WorkMainContainer } from "../styles/WorkStyles";

import { WorkCards } from "../components/workComponents/WorkCards";

export const Work: React.FC = () => {
  return (
    <div className="work-main">
      <WorkMainContainer>
        <Container>
          <Tabs defaultActiveKey="all" className="mb-3 justify-content-center">
            <Tab eventKey="all" title="All">
              <WorkCards selectedTab="all" />
            </Tab>
            <Tab eventKey="web" title="Web">
              <WorkCards selectedTab="web" />
            </Tab>
            <Tab eventKey="uiux" title="UI/UX">
              <WorkCards selectedTab="uiux" />
            </Tab>
            <Tab eventKey="branding" title="Branding">
              <WorkCards selectedTab="branding" />
            </Tab>
          </Tabs>
        </Container>
      </WorkMainContainer>
    </div>
  );
};
