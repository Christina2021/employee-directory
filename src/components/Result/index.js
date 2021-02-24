import React from 'react';

function Result(props) {                  
    return (
    <tr>
        <th scope="row"><img alt={props.name} src={props.img}/></th>
        <td className="name-field">{props.name} </td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
    </tr>
    )
};

export default Result;