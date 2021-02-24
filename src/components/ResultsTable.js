import React from 'react';

function ResultsTable(props) {
    console.log(props);
    return (
        <div className="container">
            <ul>
            {props.results.map(result => {
                let dob = new Date(result.dob.date);
                
                return (
                <li className="list-group-item" key={result.id.value}>
                    <img alt={`${result.name.first} ${result.name.last}`} src={result.picture.thumbnail}/>
                    <p>{`${result.name.first} ${result.name.last}`} </p>
                    <p>{result.phone}</p>
                    <p>{result.email}</p>
                    <p>{`${dob.getMonth()+1}-${dob.getDate()}-${dob.getFullYear()}`}</p>
                </li>
            )}
            )}
            </ul>
        </div>
    )

}

export default ResultsTable;