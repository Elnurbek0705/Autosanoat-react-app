import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;

      return (
        <span key={index}>
          <Link to={currentLink} className="breadcrumb-link">
            {crumb}
          </Link>
          {index < location.pathname.split("/").length - 1 && " / "}
        </span>
      );
    });

  return (
    <div>
      <span>
        <Link to="/">Home</Link> {location.pathname !== "/" && " / "}
      </span>
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;
