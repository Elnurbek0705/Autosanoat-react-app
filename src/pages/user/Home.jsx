import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>This is the main user interface.</p>
      <Link to="models/">Go to Models</Link>
      <Outlet /> {/* Ichki yo‘nalishlar shu yerda render qilinadi */}
    </div>
  );
};

export default Home;
