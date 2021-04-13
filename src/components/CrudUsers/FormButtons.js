import React from "react";
import { useDispatch } from "react-redux";
import { loadusers, saveUser } from "../../reducer/usersReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { defineUser } from "../../actions/actions";

function FormButtons() {
  const dispatch = useDispatch();

  const onLoad = () => {
    dispatch(loadusers());
  };

  const save = () => {
    dispatch(defineUser(getFields(true)));
    dispatch(saveUser());
  };

  const clear = () => {
    document.getElementById("txtId").value = "";
    document.getElementById("txtName").value = "";
    document.getElementById("txtUser").value = "";
    document.getElementById("txtPass").value = "";
  };

  return (
    <div className="FormButtons">
      <Button size="lg" variant="outline-warning" onClick={clear}>
        Clear
      </Button>
      <Button
        style={{ marginLeft: "2rem" }}
        size="lg"
        variant="secondary"
        onClick={onLoad}
      >
        Load
      </Button>
      <Button
        style={{ marginLeft: "2rem" }}
        size="lg"
        variant="success"
        onClick={save}
      >
        Save
      </Button>
    </div>
  );
}

function getFields(clear) {
  let userDefined;
  if (clear === true) {
    userDefined = {
      id: document.getElementById("txtId").value.trim(),
      name: document.getElementById("txtName").value,
      username: document.getElementById("txtUser").value,
      pass: document.getElementById("txtPass").value,
    };
  } else {
    userDefined = {};
  }
  return userDefined;
}

export default FormButtons;
