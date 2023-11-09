import { useAtom } from "jotai";
import React, { useState } from "react";
import { nameAtom, ageAtom, addressAtom, phoneAtom, gradesAtom } from "./atoms";

export default function FormPractice() {
  const [name, setName] = useAtom(nameAtom),
    [age, setAge] = useAtom(ageAtom),
    [address, setAddress] = useAtom(addressAtom),
    [phone, setPhone] = useAtom(phoneAtom),
    [grades, setGrades] = useAtom(gradesAtom),
    [formName, setFormName] = useState(""),
    [formAge, setFormAge] = useState(0),
    [formAddress, setFormAddress] = useState(""),
    [formPhone, setFormPhone] = useState(0),
    [formGrades, setFormGrades] = useState([]),
    submitForm = (e) => {
      e.preventDefault();
      setName(formName);
      setAge(formAge);
      setAddress(formAddress);
      setPhone(formPhone);
      setGrades(formGrades);
    };

  return (
    <form onSubmit={submitForm}>
      <div className="form-field">
        <label>Name : </label>
        <input value={formName} onChange={(e) => setFormName(e.target.value)}></input>
      </div>
      <div className="form-field">
        <label>Age : </label>
        <input value={formAge} onChange={(e) => setFormAge(e.target.value)}></input>
      </div>
      <div className="form-field">
        <label>Address : </label>
        <input value={formAddress} onChange={(e) => setFormAddress(e.target.value)}></input>
      </div>
      <div className="form-field">
        <label>Phone : </label>
        <input value={formPhone} onChange={(e) => setFormPhone(e.target.value)}></input>
      </div>
      <div className="form-field">
        <label>Grades : </label>
        <input value={formGrades} onChange={(e) => setFormGrades(e.target.value)}></input>
      </div>
      <br />
      <br />
      <button type="submit">Submit User</button>
    </form>
  );
}
