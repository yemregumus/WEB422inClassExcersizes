import React, { useRef } from "react";

export default function UncontrolledForms() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitting the form", inputRef.current.value);
  };

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <form>
        <input placeholder="uncontrolled" ref={inputRef} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
