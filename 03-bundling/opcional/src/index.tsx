import React from "react";
import { createRoot } from "react-dom/client";
import { BaseComponent } from "./baseComponent";
import classes from "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className={classes.title}>Hello World</h1>
    <BaseComponent />
  </div>
);