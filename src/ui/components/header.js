import React from 'react';
import './header.less';


function Header (props) {
	function onClick(){
		console.log("Clicked");

	}
  return (
    <header className="header flex-box">
      <i className="header-icon fas fa-cloud-sun-rain"></i><span className="header-title">HEM Weather</span>
      <div className="author">Made with <i className="heart fas fa-heart"></i> by Hala , Ellen and Maria    </div>
      <p>
      <button onClick={onClick}>Night mode</button>
      </p>
    </header>
  )
}

export default Header;
