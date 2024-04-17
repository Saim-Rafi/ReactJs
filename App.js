import React from "react";
import ReactDOM from "react-dom/client";


//React Functional Component
const Heading1 = ()=> (
  <h1 className="heading1">
    This is a heading!
  </h1>
);
 
const number=1000;//we can use js inside the functional component using {}


//Conponent composition
const Heading2 = () => (
    <div id="container">
        {Heading1()}
        <Heading1 />

        {number}

        <h1 className="heading 2">
            This is another heading!
        </h1>
    </div>

)

const root = ReactDOM.createRoot(document.getElementById("root"));

//jsx- React.createElement => ReactElement-Js Object => HTMLelement(render)

// const jsxheading = <h1 className="head">This is a heading from JSX⚡️</h1>;

root.render(<Heading2 />);

