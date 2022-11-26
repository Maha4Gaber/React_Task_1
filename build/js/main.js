
"use strict";


var allitmes = [];

var namee = void 0,
    number = void 0,
    id = void 0;
var names = function names(e) {
  namee = e.target.value;
};

var num = function num(e) {
  number = e.target.value;
};

var idnum = function idnum(e) {
  id = e.target.value;
};

function submit(e) {
  e.preventDefault();
  var obj = {
    name: "",
    num: "",
    idnum: ''
  };
  obj.name = namee;
  obj.num = number;
  obj.idnum = id;
  allitmes.push(obj);
  e.target.elements[0].value = '';
  e.target.elements[1].value = '';
  e.target.elements[2].value = '';
  console.log(allitmes);
  render();
}

function render() {
  var ele = React.createElement(
    "div",
    { id: "main" },
    React.createElement(
      "form",
      { onSubmit: submit },
      React.createElement(
        "label",
        null,
        "Name"
      ),
      React.createElement("input", { type: "text", onChange: names }),
      React.createElement(
        "label",
        null,
        "Number"
      ),
      React.createElement("input", { type: "number", onChange: num }),
      React.createElement(
        "label",
        null,
        "National Id "
      ),
      React.createElement("input", { type: "number", onChange: idnum }),
      React.createElement("input", { type: "submit" })
    ),
    React.createElement(
      "ul",
      null,
      allitmes.length ? allitmes.map(function (item) {
        return React.createElement(
          "li",
          null,
          "Name : ",
          item.name,
          " \xA0\xA0  Number : ",
          item.num,
          " \xA0\xA0  National Id : ",
          item.idnum
        );
      }) : ""
    )
  );
  ReactDOM.render(ele, document.getElementById("app"));
};
render();
