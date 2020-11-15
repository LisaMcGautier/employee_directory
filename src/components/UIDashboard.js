import React from "react";

function UIDashboard(props) {
  return (
    <form>
      <hr></hr>
      <div className="form-group">
        <div className="row">

          <div className="col-6">

          Type a name into the search field to return employees with that name.

            {/* <label htmlFor="search"><b>Search:</b></label> */}
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control m-3"
              placeholder="Search for employee by first or last name"
              id="search"
            />
          </div>

          <div className="col-1">
            <button onClick={props.handleFormSubmit}
              className="btn btn-danger m-4"> Search </button>
          </div>


          {/* <div className="col-3">
            <button onClick={props.handleEmployeeSortLast}
              className="btn btn-primary"> Sort by last name </button>                           
          </div>
          <div className="col-3">
            <button onClick={props.handleEmployeeSortFirst}
              className="btn btn-success"> Sort by first name </button>              
          </div>
          <div className="col-1">
            <button onClick={props.handleEmployeeSlice}
              className="btn btn-dark"> Slice </button>              
          </div> */}

        </div>
      </div>
    </form>
  );
}

export default UIDashboard;
