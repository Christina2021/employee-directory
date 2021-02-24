import React, { Component } from "react";
import API from "../utils/API";
import ResultsTable from "../components/ResultsTable"

class SearchEmployeeContainer extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.search()
          .then(res => this.setState({ results: res.data.results }))
          .catch(err => console.log(err));
    };

    //Will need HandleInputChange function for search box
    
    render() {
        return (
            <div>
                <input type="text" placeholder="Search Employee Name"/>
                <ResultsTable results={this.state.results} />
            </div>
        )
    }

}

export default SearchEmployeeContainer;