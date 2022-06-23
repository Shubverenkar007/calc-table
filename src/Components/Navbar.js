import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="box">

      {/* Navbar link for Assingment 1 */}

      <div>
        <Link className="link" to="/calculator">
          Assingment 1
        </Link>
        <p>
          To do basic <i>calculations</i> of 2 numbers.
          <br />
          You can perform operations like
          <b> ADDITION , SUBTRACTION , MULTIPLICATION </b>and <b>DIVISION</b>.
        </p>
      </div>
      <hr />

      {/* Navbar link for Assingment 2 */}

      <div>
        <Link className="link" to="/form">
          Assingment 2
        </Link>
        <p>
          For creating a table of all entered <b>Names</b> with their
          <b> lastnames</b> and retain all the previous entered names.
        </p>
      </div>
    </div>
  );
};

export default Navbar;
