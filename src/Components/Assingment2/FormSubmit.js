import React, { useState } from "react";
import "./FormSubmit.css";
import FormTable from "./FormTable";

const FormSubmit = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();

  // function to append new data to existing data
  const handleSubmit = (e) => {
    e.preventDefault();
    let result1 = name;
    let result2 = lastName;
    setData([...data, { mainName: result1, surName: result2 }]);
  };

  return (
    <div className="box">
      {/* form for taking name and lastname */}

      <form onSubmit={handleSubmit}>
        <label className="label">First Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter first name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label className="label">Last Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter last name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br />
        <button type="submit">SUBMIT</button>
      </form>

      <FormTable name={name} lastName={lastName} data={data} />
    </div>
  );
};

export default FormSubmit;
