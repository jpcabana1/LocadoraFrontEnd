import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../reducer/usersReducer";
import { defineUser } from "../actions/actions";

function UsersTable(props) {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    const selectedUser = users.find(
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
    const selectedUser = users.find(
      (user) => user.id.toString() === e.target.value
    );
    dispatch(defineUser(selectedUser));
    dispatch(deleteUser());
  };

  return (
    <div>
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
          {props.map((user) => (
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
