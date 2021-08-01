import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {Button, Modal, Form} from "react-bootstrap";
// import {database} from "../Auth/firebase";

import {useDispatch, useSelector} from "react-redux";
import { search } from "../Redux/Actions/searchAction";

function AddButton(props) {
  const dispatch = useDispatch();
  const navType = useSelector((state) => state.nav.type);

  // regex tester

  const regexTester = () => {
    let url = "https://www.youtube.com/watch?v=BDgQJCekDAk"
    let regExp = 
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
    console.log(match)
        // return match && match[7].length == 11 ? match[7] : false;
  }
regexTester()

  // function youtube_parser(url) {
  //   var regExp = 
  //     /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  //   var match = url.match(regExp);
  //   return match && match[7].length == 11 ? match[7] : false;
  // }
  // const videoLinks = [];
  // releaseInfo.videos.map((url) => {
  //   console.log(url.uri)
  //   videoLinks.push(youtube_parser(url.uri));
  // });







  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  //modal functions

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  const searchHandler = (e) => {
    e.preventDefault();
  dispatch(search(name, navType))
  };


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
      {/* <div className="searchResultsContainer">
        <Search />
      </div> */}
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={searchHandler}>
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
            <Button variant="success" type="submit" >
              Search
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddButton;
