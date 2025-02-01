import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = "";

  const breadcrumbNames = {
    models: "Modellari",
    modelTypes: "Model turlari",
    modelDetails: "Model details",
  };

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;
      const crumbName = breadcrumbNames[crumb] || crumb;

      return (
        <span key={index}>
          <Link to={currentLink} className="breadcrumb-link">
            {crumbName}
          </Link>
          {index < location.pathname.split("/").length - 2 && " > "}
        </span>
      );
    });

  return (
    <div>
      <span>
        <Link to="/">Bosh sahifa</Link> {location.pathname !== "/" && " > "}
      </span>
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;
