const heading = React.createElement(
    "h1", 
    {id:"heading"}, 
    "Hello World From ReactJS!");

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"This is an h1 tag"),React.createElement("h1",{},"This is an h2 tag")]))

// console.log(heading);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
