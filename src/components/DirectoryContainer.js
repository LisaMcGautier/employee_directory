import React, { Component } from "react";

import API from "../utils/API";
import Header from "./Header"
// import Buttons from "./Buttons"
import EmployeeTable from "./EmployeeTable";
import UIDashboard from "./UIDashboard";

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

  // When the form is submitted, pass the search value to the searchDirectory function
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDirectory(this.state.search);
  };

  // the searchDirectory function will filter first and last names for the search value
  searchDirectory = event => {
    console.log(`You searched for ${this.state.search}`);

    const filteredList = this.state.employees.filter(employee => 
      employee.name.first.toLowerCase().includes(this.state.search.toLowerCase())
      || employee.name.last.toLowerCase().includes(this.state.search.toLowerCase()));

    this.setState({employees: filteredList});
  }

  // sort by LAST name
  handleEmployeeSortLast = () => {
    const employees = this.state.employees;
    this.setState({
      employees: employees.sort(function (a, b) {

        const nameA = a.name.last.toLowerCase();
        const nameB = b.name.last.toLowerCase();

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

  // sort by FIRST name
  handleEmployeeSortFirst = () => {
    const employees = this.state.employees;
    this.setState({
      employees: employees.sort(function (a, b) {

        let nameA = a.name.first.toLowerCase();
        let nameB = b.name.first.toLowerCase();

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

  // sample method slice 
  handleEmployeeSlice = () => {
    const employees = this.state.employees;
    this.setState({ employees: employees.slice(25) })
  }

  render() {
    return (
      <div className="container">

        <Header />

        {/* <Buttons /> */}

        <button className="btn btn-primary m-3" onClick={this.handleEmployeeSortLast}>Sort by last name</button>
        <button className="btn btn-success m-3" onClick={this.handleEmployeeSortFirst}>Sort by first name</button>
        <button className="btn btn-warning m-3" onClick={this.handleEmployeeSlice}>Slice</button>

        <UIDashboard
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}

          // handleEmployeeSortLast={this.handleEmployeeSortLast}
          // handleEmployeeSortFirst={this.handleEmployeeSortFirst}
          // handleEmployeeSlice={this.handleEmployeeSlice}
        />

        <EmployeeTable employees={this.state.employees} />

      </div>
    );
  }
}

export default DirectoryContainer;
