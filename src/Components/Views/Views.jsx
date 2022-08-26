import React from "react";
import { Route, Routes } from "react-router-dom";
import Exchange from "../Exchange/Exchange";
import { Overview } from "../Overview/Overview";

export const Views = () => {
  return (
    <Routes>
      <Route path="/overview" element={<Overview />} />
      <Route index path="/exchange" element={<Exchange />} />
    </Routes>
  );
};
