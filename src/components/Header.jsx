import React from "react";

function Header({ title }) {
  return (
    <nav>
      <h1>
        {title}-{Date.now()}
      </h1>
    </nav>
  );
}

export default Header;
