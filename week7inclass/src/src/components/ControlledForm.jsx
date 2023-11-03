import React, { useState } from "react";

export default function ControlledForms() {
  const [name, setName] = useState("");

  const onInputChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting the form");
  };

  return (
    <>
      <h2>Controlled Form</h2>
      <form>
        <input placeholder="controlled" value={name} onChange={onInputChange} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
