import { Modal, Button } from "react-bootstrap";

interface Props {
  showModal: boolean;
  handleClose: () => void;
  whichCard: string;
}

export const WorkModal: React.FC<Props> = ({
  showModal,
  handleClose,
  whichCard,
}) => {
  return (
    <>
      {(whichCard === "1" && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>1 Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )) ||
        (whichCard === "2" && (
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>2 Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )) ||
        (whichCard === "3" && (
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>3 Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        ))}
    </>
  );
};
