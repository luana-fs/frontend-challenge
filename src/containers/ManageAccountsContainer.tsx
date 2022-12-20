import React, { useContext, useEffect, useState } from "react";
import { UsersListContext } from "../contexts/UsersContext";
import { useInput } from "../hooks/useInput";
import ManageAccounts from "../pages/ManageAccounts";

export function ManageAccountsContainer() {
  const { value: role, onChange: onChangeRole } = useInput("");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    states: { usersList },
    handlers: { handleGetAllUsers, handleEditUser },
  } = useContext(UsersListContext);

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  const data = {
    states: { usersList, role, searchQuery },
    setters: { onChangeRole, setSearchQuery },
    handlers: { handleEditUser },
  };

  return <ManageAccounts data={data} />;
}
