import { Nav, Container } from "react-bootstrap";

import { TransparentNav } from "../styles/NavStyles";

export const NavigationBar: React.FC = () => {
  return (
    <>
      <TransparentNav sticky="top" expand="lg" variant="light" bg="light">
        <Container>
          <TransparentNav.Brand href="#">LOGO</TransparentNav.Brand>
          <TransparentNav.Toggle />
          <TransparentNav.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Service</Nav.Link>
              <Nav.Link href="#">Works</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </TransparentNav.Collapse>
        </Container>
      </TransparentNav>
    </>
  );
};
