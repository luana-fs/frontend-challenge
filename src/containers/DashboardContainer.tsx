import React, { useContext, useEffect, useState } from "react";
import DashboardPage from "../pages/DashboardPage";

export function DashboardContainer() {
  const data = {
    states: {},
    setters: {},
    handlers: {},
  };

  return <DashboardPage data={data} />;
}
