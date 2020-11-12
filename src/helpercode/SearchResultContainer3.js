import React, { Component } from "react";
import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
    // employees: []
  };

  // When this component mounts, get a list of employees
  componentDidMount() {

    this.getEmployees()
    }

  getEmployees = () => {
      API.search()
      .then(response => {
        //console.log(response)
        //console.log(response.data)
        console.log(response.data.results)
        // console.log(response.data.results[0])

        this.setState({ results: response.data.results })

      }).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  handleEmployeeSplit = () => {
    const employees = this.state.results;
    this.setState({results: employees.slice(14)})
  }

  render() {
    return (
      <div>
        <button onClick={this.handleEmployeeSplit}>Split</button>
        
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />

        <EmployeeTable employees={this.state.results} />
        {/* <ResultList results={this.state.results} /> */}
      </div>
    );
  }
}

export default SearchResultContainer;
