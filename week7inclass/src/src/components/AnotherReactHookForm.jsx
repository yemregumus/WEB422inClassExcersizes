import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function AnotherReactHookForm() {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      jobDesc: "",
      yearsWorked: 0,
    },
  });

  const submitForm = (data) => {
    console.log("Job description on submitting the form is ", data.jobDesc);
    console.log("Years worked on submitting the form is ", data.yearsWorked);
  };

  useEffect(() => {
    let data = {
      jobDesc: "Oriflame IT Networking Boss",
      yearsWorked: "Bilocan",
    };

    for (const prop in data) {
      setValue(prop, data[prop]);
    }
  }, []);

  return (
    <>
      <h2>Another React hook for Controlled forms</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <label>Job Description=</label>
        <input
          {...register("jobDesc", {
            required: true,
            maxLength: 50,
          })}
        />
        <br />
        <br />
        <label>Years Worked--=</label>
        <input
          {...register("yearsWorked", {
            required: true,
            min: 1,
            max: 30,
          })}
        />
        <br />
        <button type="submit">Submit ula bilo </button>
      </form>
    </>
  );
}
