import React, {useRef, useState} from "react";
import {Card, Form, Button, Container, Alert} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAuth} from "../../Auth/AuthProvider";
import { signButton } from "../../Redux/Actions/navSelectorAction";

function Signup() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {signUp} = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    //check to make sure the users passwords match
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
      dispatch(signButton(true));
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
    >
      <div className="w-100" style={{maxWidth: "400px"}}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>password confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <br></br>
              <Button type="submit" className="w-100" disabled={loading}>
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
