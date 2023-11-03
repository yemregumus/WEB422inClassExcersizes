import React, { useContext } from "react";
import { NameContext } from "../../pages/_app";

export default function C() {
  const myName = useContext(NameContext);
  return (
    <div>
      <h3>Child Component C</h3>
      <p>The name set in Component B is: {myName}</p>
    </div>
  );
}
