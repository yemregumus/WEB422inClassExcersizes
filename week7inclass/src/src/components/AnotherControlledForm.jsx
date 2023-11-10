import React, { useState } from "react";

export default function AnotherControlledForm() {
  const [whatTodo, setWhatToDo] = useState("");

  const onInputChange = (e) => {
    console.log(e.target.value);
    setWhatToDo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Another Controlled Form</h1>
      <form>
        <input placeholder="anothercontrolled" value={whatTodo} onChange={onInputChange} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
