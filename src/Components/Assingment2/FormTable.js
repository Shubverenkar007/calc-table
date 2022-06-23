import React from "react";

const FormTable = ({ data }) => {
  return (
    <div>
      <h2>SUBMITTED NAMES</h2>

      {/* table to display submitted names */}
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.mainName}</td>
                <td>{data.surName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormTable;
