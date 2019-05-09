import React, { useState, useEffect } from "react";

const App = () => {
  let data = { type: 3, role: "admin" };
  let { type, role } = data;
  let arrayData = [
    [{ role: "admin", type: 1 }, ["color1", "index1"]],
    [{ role: "admin", type: 2 }, ["color2", "index2"]],
    [{ role: "admin", type: 3 }, ["color3", "index3"]],
    [{ role: "admin", type: 4 }, ["color4", "index4"]],
    [{ role: "guest", type: 2 }, ["color2", "index2"]],
    [{ role: "guest", type: 3 }, ["color3", "index3"]],
    [{ role: "guest", type: 4 }, ["color4", "index4"]]
  ];
  let actions = new Map(arrayData);
  let buttonEvent = (type, role) => {
    let newData = [...actions]
      .filter(
        ([key]) => key.role === role && key.type === type
        // return item[0].role === role && item[0].type === type;
      )
      .forEach(([key, value]) => {
        let [color, target] = value;
        console.log(color, target);
      });
    // console.log(newData);
  };
  useEffect(() => {
    buttonEvent(type, role);
  }, [buttonEvent, role, type]);
  return <div />;
};

export default App;
