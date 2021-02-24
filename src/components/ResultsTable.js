import React from 'react';

function ResultsTable(props) {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <th scope="col">Image</th>
                    <th scope="col">Name <i className={props.sorted ? "fas fa-sort-up" : "fas fa-sort-down"} onClick={props.sort}></i></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </thead>
                <tbody>
                {props.results.map(result => {
                    let dob = new Date(result.dob.date);
                    
                    return (
                    <tr key={result.id.value}>
                        <th scope="row"><img alt={`${result.name.first} ${result.name.last}`} src={result.picture.thumbnail}/></th>
                        <td>{`${result.name.first} ${result.name.last}`} </td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{`${dob.getMonth()+1}-${dob.getDate()}-${dob.getFullYear()}`}</td>
                    </tr>
                    )}
                )}
                </tbody>
            </table>
        </div>
    )

}

export default ResultsTable;