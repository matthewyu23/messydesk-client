
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

const MyModal = (props) => {
    return (
        <Modal show={props.show} centered>
          <Modal.Header>
            <Modal.Title>Welcome to MessyDesk! </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
              <p> <span className="padded-right">📕</span>MessyDesk is a minimal online collaborative notepad </p>
              <p> <span className="padded-right">✏️</span>Use MessyDesk to quickly jot down notes during a meeting </p>
              <p> <span className="padded-right">🙌</span>Collaborate on the same table with your teammates! </p>
             
          </Modal.Body>
          <Modal.Footer> 

            <Button  className="padded" onClick={props.createTable}>Create a Table</Button>

            <Button  className="padded" onClick={props.joinTable}>Join a Table</Button>
               
            {/* <Button onClick={props.onHide}>Close</Button> */}
          </Modal.Footer>
        </Modal>
      );
    
}

export default MyModal;