import React from "react";

function EmployeeTable(props) {
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Photo</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Zip Code</th>
          <th scope="col">Gender</th>
        </tr>

      </thead>
      <tbody>
        {
          props.employees.map((employee, index) => {
            // console.log(employee.id)
            return (

              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img src={employee.picture.thumbnail} alt={employee.first} />
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.location.postcode}</td>
                <td>{employee.gender}</td>
              </tr>
            )
          })
        }

      </tbody>
    </table>
  );
}

export default EmployeeTable;