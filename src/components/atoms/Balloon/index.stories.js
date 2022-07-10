import React from "react";
import Balloon from "./index.js";

export default (stories) =>
  stories
    .add("2 letters", () => <Balloon>Next</Balloon>)
    .add("4 letters", () => <Balloon>Delete</Balloon>);
