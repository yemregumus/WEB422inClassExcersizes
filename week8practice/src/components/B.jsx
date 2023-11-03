import React, { useContext } from "react";
import { SetNameContext } from "../../pages/_app";

export default function B() {
  const setName = useContext(SetNameContext);

  const onButtonClick = () => {
    setName("Yunus Gumus");
  };
  return (
    <>
      <h3>Child Component B</h3>
      <button onClick={onButtonClick}>Click here to set name</button>
    </>
  );
}
