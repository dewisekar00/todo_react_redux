import React from 'react';

import AllButton from './ButtonComponents/AllButton';
import ActiveButton from './ButtonComponents/ActiveButton';
import CompletedButton from './ButtonComponents/CompletedButton';

const Header = () => {
  return (
    <div className="header">
      <h2 className="title">
        todo <br /> <span className="sub-title">set your time</span>
      </h2>

      <div className="nav-container">
      <AllButton/>
     <ActiveButton/>
     <CompletedButton/>
      </div>
    </div>
  );
};

export default Header;
