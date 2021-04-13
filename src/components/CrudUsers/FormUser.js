import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserFields from "./UserFields";
import UsersTable from "./UsersTable";
import FormButtons from "./FormButtons";
import { useSelector } from "react-redux";
import "./FormUser.css";

function FormUser() {
  const usersState = useSelector((state) => state.users);

  return (
    <div className="FormUser">
      <UserFields />
      <FormButtons />
      {UsersTable(usersState)}
    </div>
  );
}

export default FormUser;
