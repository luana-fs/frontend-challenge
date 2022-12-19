import React, { useContext, useEffect, useState } from "react";
import { UsersListContext } from "../contexts/UsersContext";
import { useInput } from "../hooks/useInput";
import ManageAccounts from "../pages/ManageAccounts";

export function ManageAccountsContainer() {
  const { value: role, onChange: onChangeRole } = useInput("");

  const {
    states: { usersList },
    handlers: { handleGetAllUsers, handleEditUser },
  } = useContext(UsersListContext);

  console.log("Lista de usurarios", usersList);

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  const data = {
    states: { usersList, role },
    setters: { onChangeRole },
    handlers: { handleEditUser },
  };

  return <ManageAccounts data={data} />;
}