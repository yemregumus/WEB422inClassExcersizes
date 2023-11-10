import React, { useState } from "react";
import B from "../src/components/B.jsx";
import C from "../src/components/C.jsx";

export default function App() {
  const [value, setValue] = useState("NONE");

  return (
    <>
      <h1>Parent Component A</h1>
      <br />
      <br />
      <br />
      <br />
      <B />
      <br />
      <br />
      <br />
      <br />
      <C />
    </>
  );
}
