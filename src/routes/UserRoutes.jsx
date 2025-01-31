import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/shared/Layout";
import Home from "../pages/user/Home";
import Models from "../pages/user/Models";
import ModelTypes from "../pages/user/ModelTypes";
import ModelDetails from "../pages/user/ModelDetails";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="models" element={<Models />} />
        <Route path="models/modelTypes" element={<ModelTypes />} />
        <Route path="models/modelTypes/modelDetails/:id" element={<ModelDetails />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;