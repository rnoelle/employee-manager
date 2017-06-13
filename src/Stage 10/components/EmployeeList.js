import React, { Component } from 'react';

export default class EmployeeList extends Component {
  render() {
    return (
      <ul className="listContainer">
      {
        this.props.employees.map(el => {
          return (
            <li className="listText" key={el.id} onClick={()=>this.props.selectEmployee(el)}>{el.name}</li>
          )
        })
      }
      </ul>
    )
  }
}
