import React from 'react';
import Result from '../Result';
import "./style.css";

function ResultsTable(props) {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead className="table-success">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name <i className={props.sorted ? "fas fa-sort-up" : "fas fa-sort-down"} onClick={props.sort}></i></th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                {props.results.map(result => {
                    let dob = new Date(result.dob.date);
                    return (
                        <Result 
                            key = {result.id.value}
                            name = {`${result.name.first} ${result.name.last}`}
                            img = {result.picture.thumbnail}
                            phone = {result.phone}
                            email = {result.email}
                            dob = {`${dob.getMonth()+1}-${dob.getDate()}-${dob.getFullYear()}`}
                        />
                    )                   
                })}
                </tbody>
            </table>
        </div>
    )

}

export default ResultsTable;