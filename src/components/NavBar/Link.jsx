import React from "react";

const Link = ({ rout }) => {
  return (
    <li className="px-4 lg:mr-10 hover:bg-amber-400">
      <a href={rout.url}>{rout.name}</a>
    </li>
  );
};

export default Link;
