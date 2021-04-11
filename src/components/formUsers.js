import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

function FormUsers() {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>id</Form.Label>
          <Form.Control id="txtId" placeholder="User id" readOnly />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Nome</Form.Label>
          <Form.Control id="txtName" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>User</Form.Label>
          <Form.Control id="txtUser" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control id="txtPass" type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default FormUsers;
