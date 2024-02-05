("use strict");
const ShowBig = () => {
  const [liked, setLiked] = React.useState(false);
  const [inputText, setInputText] = React.useState("");

  return React.createElement("div", null,
  React.createElement("input", {
    type: "text",
    placeholder: "Insert Text",
    value: inputText,
    onChange: (e) => setInputText(e.target.value)
  }),
  React.createElement("h1", null, inputText)
);
};


const domContainer = document.querySelector("#big_show");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(ShowBig));
