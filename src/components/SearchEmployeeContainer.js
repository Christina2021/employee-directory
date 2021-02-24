import React, { Component } from "react";
import API from "../utils/API";
import ResultsTable from "../components/ResultsTable"

class SearchEmployeeContainer extends Component {
    // 2 arrays: one for initial results given into "results"; the other for filtered results given into "newResults"
    state = {
        search: "",
        results: [],
        newResults: [],
        aToZ: true
    };

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.search()
          .then(res => {
            let results = res.data.results.sort(((a, b) => {
                if(a.name.first < b.name.first) { return -1; }
                else if(a.name.first > b.name.first) { return 1; }
                else if(a.name.last < b.name.last) { return -1; }
                else if(a.name.last > b.name.last) { return 1; }
                else {return 0};
            }))
            return this.setState({ results: results, newResults: results })
          })
          .catch(err => console.log(err));
    };

    handleInputChange = event => {
        event.preventDefault();
        let filterThis;
        let filteredResults;

        if (this.state.aToZ) {
            filterThis = this.state.results;
        } else {
            filterThis = this.state.results.slice().reverse();
        }

        filteredResults = filterThis.filter(employee => {
            let employeeName = employee.name.first.toLowerCase();

            return employeeName.includes(`${event.target.value}`);
            
        });

        this.setState({
            newResults: filteredResults
        })
    }

    handleSortChange = event => {
        event.preventDefault();

        let sorted = this.state.newResults.reverse();

        if (this.state.aToZ) {
            this.setState({
                newResults: sorted,
                aToZ: false
            })
        } else {
            this.setState({
                newResultes: sorted,
                aToZ: true
            })
        }

    }
    
    render() {
        return (
            <div>
                <input type="text" placeholder="Search Employee Name" onChange={this.handleInputChange}/>
                <ResultsTable results={this.state.newResults} sort={this.handleSortChange} sorted={this.state.aToZ}/>
            </div>
        )
    }

}

export default SearchEmployeeContainer;