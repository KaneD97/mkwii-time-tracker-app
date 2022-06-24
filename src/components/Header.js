import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const Header = () => {
  const divStyle = {color: 'black'}
  return (
    <div className="ui menu">
      <div className="ui container center">
        <Link to={``} style={{divStyle}}>
        <h2>
          <Icon name='home' size='big'/>
          MKWii TT</h2>
          </Link>
      </div>
    </div>
  );
};

export default Header;
