import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h2 className="title">
        todo <br /> <span className="sub-title">set your time</span>
      </h2>

      <div className="nav-container">
        <a href="#">All</a>
        <a href="#">active</a>
        <a href="#">complete</a>
      </div>
    </div>
  );
};

export default Header;
