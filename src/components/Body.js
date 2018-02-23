import React from 'react';

const Body = props => {
  let color;
  let colArr = [];
  if (props.isGreen) {
    color = "green";
  } else {
    color = "red";
  };
  while (colArr.length < props.numCol) {
    colArr.push(
      <div className="rect" style={{
        backgroundColor: color,
        height: props.height + "px",
        width: (100 / props.numCol) - 2 + "%"
      }} key={colArr.length}>
      </div>
    )
  }
  let lineItems = props.lineItems.map((item, i) => {
    const truncateStr = str => {
      if (str.length > 15) {
        console.log(str.length);
        str = str.slice(0, 15);
        str += "...";
        return str;
      } else {
        return str;
      };
    }
    return(
      <div className="row line-item align-items-center" key={i}>
        <img src="./Assets/Icon.svg" alt="flame thing" className="item"/>
        <div>
          <h4 className="item-title item">{truncateStr(item.title)}</h4>
          <h6 className="item-subtitle item">{truncateStr(item.subtitle)}</h6>
        </div>
        <p className="detail item align-center">{item.detail}</p>
      </div>
    )
  });
  return(
    <div className="row main-content">
      <div className="col col-md-4 col-12 line-items">
        {lineItems}
      </div>
      <div className="col col-md-8 col-12">
        <div className="row input-Row">
          <label>Number of columns</label>
          <input type="text" className="col-input" name="numCol" onInput={e => props.handleInput(e) } placeholder={props.numCol}></input>
          <label>Row Height</label>
          <input type="text" className="heigh-input" name="colHeight" onInput={e => props.handleInput(e) } placeholder={props.height}></input>
          <p className="input-side">px</p>
        </div>
        <div className="row col-box">
          {colArr}
        </div>
      </div>
    </div>
  )
}

export default Body
