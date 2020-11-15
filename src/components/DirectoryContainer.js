import React, { Component } from "react";

import API from "../utils/API";
import Header from "./Header"
import EmployeeTable from "./EmployeeTable";
import SearchForm from "./SearchForm";

class DirectoryContainer extends Component {
  state = {
    search: "",
    employees: []
  };

  // When this component mounts, get a list of employees
  componentDidMount() {
    this.getEmployees()
  }

  // AJAX call to randomuser API
  getEmployees = () => {
    API.retrieve()
      .then(response => {
        //console.log(response)
        //console.log(response.data)
        console.log(response.data.results)
        // console.log(response.data.results[0])

        this.setState({ employees: response.data.results })

      }).catch(err => console.log(err));
  };

  // code that will listen to events on the page and update state
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    console.log(event.target.value);
  };

  // When the form is submitted, search the employees array for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDirectory(this.state.search);
  };

  searchDirectory = event => {

  }

  // sample method slice 
  handleEmployeeSlice = () => {
    const employees = this.state.employees;
    this.setState({ employees: employees.slice(15) })
  }

  // sample method sort 
  handleEmployeeSort = () => {
    const employees = this.state.employees;
    this.setState({ employees: employees.sort(function (a, b) {

        let nameA = a.name.last.toLowerCase();
        let nameB = b.name.last.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      })
    })
  }

  render() {
    return (
      <div className="container">

        <Header />

        <button className="btn btn-danger mt-3" onClick={this.handleEmployeeSlice}>Slice</button>

        <button className="btn btn-warning mt-3" onClick={this.handleEmployeeSort}>Sort</button>

        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />

        <EmployeeTable employees={this.state.employees} />

      </div>
    );
  }
}

export default DirectoryContainer;
