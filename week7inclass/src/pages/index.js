import React from "react";
import UncontrolledForms from "../src/components/UncontrolledForms.jsx";
import ControlledForms from "../src/components/ControlledForm.jsx";
import ReactHookForm from "../src/components/ReactHookForm.jsx";
import AnotherControlledForm from "@/src/components/AnotherControlledForm.jsx";
import AnotherReactHookForm from "@/src/components/AnotherReactHookForm.jsx";

export default function Home() {
  return (
    <>
      <h1> Controlled and Uncontrolled forms in React</h1>
      <div> ------------------------------------------- </div>
      <br />
      <UncontrolledForms />
      <br />
      <div> ------------------------------------------- </div>
      <br />
      <ControlledForms />
      <br />
      <br />
      <AnotherControlledForm />
      <div> ------------------------------------------- </div>
      <br />
      <ReactHookForm />
      <br />
      <AnotherReactHookForm />
    </>
  );
}
