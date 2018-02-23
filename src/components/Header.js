import React from 'react';

const Header = props => {
  let imgSrc = ""
  let btnClass = "btn ";
  let redClass, greenClass;
  if (props.isGreen) {
    btnClass += "green ";
    greenClass = btnClass + "greenActive";
    redClass = btnClass
    imgSrc = "./Assets/greenLogo.png";
  } else {
    btnClass += "red ";
    redClass = btnClass + "redActive";
    greenClass = btnClass;
    imgSrc = "./Assets/redLogo.png";
  };



  return(
    <div className="row header align-items-center">
      <div className="col col-md-5">
        <img src={imgSrc} alt="My App Logo" className="logo"/>
      </div>
      <div className="col col-md-7">
        <button id="greenBtn" className={greenClass} onClick={e => { props.btnClick("green") }}>Green</button>
        <button id="redBtn" className={redClass} onClick={e => { props.btnClick("red") }}>Red</button>
        <img src="./Assets/face.jpg" className="face rounded-circle float-right"/>
      </div>
    </div>
  )
}

export default Header;
