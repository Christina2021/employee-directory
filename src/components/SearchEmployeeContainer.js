import React, { Component } from "react";
import API from "../utils/API";
import ResultsTable from "../components/ResultsTable"

class SearchEmployeeContainer extends Component {
    // 2 arrays: one for initial results given into "results"; the other for filtered results given into "newResults"
    state = {
        search: "",
        results: [],
        newResults: []
    };

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.search()
          .then(res => this.setState({ results: res.data.results, newResults: res.data.results }))
          .catch(err => console.log(err));
    };

    handleInputChange = event => {
        event.preventDefault();
        
        let filteredResults = this.state.results.filter(employee => {
            let employeeName = employee.name.first.toLowerCase();

            return employeeName.includes(`${event.target.value}`);
            
        });

        this.setState({
            newResults: filteredResults
        })

    }
    
    render() {
        return (
            <div>
                <input type="text" placeholder="Search Employee Name" onChange={this.handleInputChange}/>
                <ResultsTable results={this.state.newResults} />
            </div>
        )
    }

}

export default SearchEmployeeContainer;