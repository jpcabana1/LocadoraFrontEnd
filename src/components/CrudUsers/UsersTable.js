import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../reducer/usersReducer";
import { defineUser, filterUsers } from "../../actions/actions";
import "./FormUser.css";

function UsersTable(props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.formUserState.usersFiltered);

  const handleSelect = (e) => {
    const selectedUser = props.find(
      (user) => user.id.toString() === e.target.value
    );

    dispatch(defineUser(selectedUser));
    if (selectedUser !== undefined && selectedUser !== {}) {
      document.getElementById("txtId").value = selectedUser.id;
      document.getElementById("txtName").value = selectedUser.name;
      document.getElementById("txtUser").value = selectedUser.username;
    }
  };

  const handleDelete = (e) => {
    const selectedUser = props.find(
      (user) => user.id.toString() === e.target.value
    );
    dispatch(defineUser(selectedUser));
    dispatch(deleteUser());
  };

  const handleSearch = (e) => {
    let array = props.filter((user) =>
      user.name.includes(document.getElementById("txtSearch").value)
    );
    dispatch(filterUsers(array));
  };

  return (
    <div className="FormTable">
      <Form>
        <Form.Label>
          <b>Pesquisar:</b>
        </Form.Label>
        <Form.Group>
          <Form.Control
            id="txtSearch"
            placeholder="Pesquisar usuário por nome"
            onChange={handleSearch}
          />
        </Form.Group>
      </Form>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Nome</th>
            <th>Username</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>
                <Button value={user.id} variant="light" onClick={handleSelect}>
                  Selecionar
                </Button>
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <Button value={user.id} variant="danger" onClick={handleDelete}>
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersTable;
