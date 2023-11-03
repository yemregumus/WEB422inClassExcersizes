import React, { useState } from "react";
import { useAtom } from "jotai";
import { userNameAtom, ageAtom, emailAtom } from "./atoms";

export default function Form() {
  const [userName, setUserName] = useAtom(userNameAtom),
    [age, setAge] = useAtom(ageAtom),
    [email, setEmail] = useAtom(emailAtom),
    [formUserName, setFormUserName] = useState(""),
    [formAge, setFormAge] = useState(0),
    [formEmail, setFormEmail] = useState(""),
    submitForm = (e) => {
      e.preventDefault();
      setUserName(formUserName);
      setAge(formAge);
      setEmail(formEmail);
    };
  return (
    <form onSubmit={submitForm}>
      <div className="form-field">
        <label>UserName : </label>
        <input value={formUserName} onChange={(e) => setFormUserName(e.target.value)}></input>
      </div>
      <div className="form-field">
        <label>Age : </label>
        <input value={formAge} onChange={(e) => setFormAge(e.target.value)}></input>
      </div>
      <div className="form-field">
        <label>Email : </label>
        <input value={formEmail} onChange={(e) => setFormEmail(e.target.value)}></input>
      </div>
      <br />
      <br />
      <button type="submit">Submit User</button>
    </form>
  );
}
