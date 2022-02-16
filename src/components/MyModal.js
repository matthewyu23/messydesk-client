
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from 'react-bootstrap';

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
            <div className="row">

            
            <Button  className="padded" onClick={props.createTable}>Create a Table</Button>
            <Form>

            <Form.Control type="number" placeholder="Table Code" onChange={e => {props.setTableCode(e.target.value)}}/>
            <Button variant="primary" type="submit" onClick={props.joinTable}>
              Join table
            </Button>
            </Form>
            {/* <Button  className="padded" onClick={props.joinTable}>Join a Table</Button> */}
            </div>
            
          </Modal.Footer>
        </Modal>
      );
    
}

export default MyModal;