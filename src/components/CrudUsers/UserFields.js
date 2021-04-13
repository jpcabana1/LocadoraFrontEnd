import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./FormUser.css";

function UserFields() {
  return (
    <div className="FormFields">
      <Form>
        <Form.Group>
          <Form.Label>
            <b>id</b>
          </Form.Label>
          <Form.Control id="txtId" placeholder="User id" readOnly />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <b>Nome</b>
          </Form.Label>
          <Form.Control id="txtName" placeholder="Enter name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <b>Usuário</b>
          </Form.Label>
          <Form.Control id="txtUser" placeholder="Enter username" />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <b>Senha</b>
          </Form.Label>
          <Form.Control id="txtPass" type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default UserFields;
