import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import Search from "../Search/Search";

function AddButton({topTen}) {
  

  const [open, setOpen] = useState(false);

  //modal functions

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={openModal} variant="outline-success" size="sm">
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Modal show={open} onHide={closeModal} animation={false}>
        <Modal.Body>
          <div className="searchResultsContainer">
            <Search topTen={topTen}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddButton;
