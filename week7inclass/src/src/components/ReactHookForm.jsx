import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      age: 0,
    },
  });

  console.log("Errors in the form is ", errors);

  const submitForm = (data) => {
    console.log("Name on submitting the form is ", data.name);
    console.log("Age on submitting the form is ", data.age);
  };

  useEffect(() => {
    let data = {
      name: "John Doe",
      age: 40,
    };

    for (const prop in data) {
      setValue(prop, data[prop]);
      // objects data = { name: 'John' }
      // data.name = data[name]
    }
  }, []);

  return (
    <>
      <h2>React hook form for Controlled forms</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <label> Name </label>
        <input
          {...register("name", {
            required: true,
            maxLength: 10,
            // validate: {
            //     // custom validation
            // }
          })}
        />
        {errors.name?.type === "maxLength" && <span> Name cannot contain more than 10 characters</span>}
        <br />
        <br />

        <label>Age </label>
        <input
          {...register("age", {
            required: true,
            min: 30,
            max: 100,
          })}
        />
        {errors.age?.type === "min" && <span> Age cannot be less than 30</span>}
        {errors.age?.type === "max" && <span> Age cannot be more than 100</span>}
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
