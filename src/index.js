import React from "react";
import ReactDOM from "react-dom/client";


//--BaiThucHanh1--
//const name = "Your name";
//React.createElement("h1",{style: {textAlign: "center"}}, name)
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(
//    React.createElement("h1", { style: { textAlign: "center" } }, name)
//);


//--BaiThucHanh2--
//const name = "My name is Nam"
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<h1 style={{textAlign: "center"}}>{name}</h1>);


//--BaiThucHanh3--
//const fruit = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"];
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(
//  <div>
//      <h1>List of fruits</h1>
//      <ul>
//          {fruit.map(item =>(<li>{item}</li>))}
//      </ul>
//  </div>
// );


//--BaiThucHanh4--
const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = () => {
    root.render(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
};
    setInterval(tick, 1000);