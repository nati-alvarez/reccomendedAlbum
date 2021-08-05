import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {userActions} from "../../Redux/Actions/userActions";

import Search from "./Search";

function AddButton(props) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  //modal functions

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    dispatch(userActions());
    setOpen(false);
  }

  // const addHandler = (type) => {
  //   database.type.add({
  //     name,
  //   });
  //   setName("");
  //   closeModal();
  // };
  return (
    <>
      <Button onClick={openModal} variant="outline-success" size="sm">
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Modal show={open} onHide={closeModal} animation={false}>
        <Modal.Body>
          <div className="searchResultsContainer">
            <Search />
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
