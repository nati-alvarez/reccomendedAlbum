import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {Button, Modal, Form} from "react-bootstrap";
import {database} from "../Auth/firebase";
import Search from "./Search";
function AddButton(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  //modal functions

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  const addHandler = (type) => {
    database.type.add({
      name,
    });
    setName("");
    closeModal();
  };
  return (
    <>
      <Button onClick={openModal} variant="outline-success" size="sm">
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      <div className="searchResultsContainer">
        <Search />
      </div>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={addHandler}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddButton;
