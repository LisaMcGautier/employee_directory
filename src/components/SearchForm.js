import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <div className="row">

          <div className="col-4">

            {/* <label htmlFor="search"><b>Search:</b></label> */}
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for employee by first or last name"
              id="search"
            />
          </div>
          <div className="col-4">
            <button onClick={props.handleFormSubmit}
              className="btn btn-danger"> Search </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
