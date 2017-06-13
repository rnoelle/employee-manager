import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          {
            this.props.employees.map(el => {
              return (
                <li key={el.id} className="listText" onClick={()=>this.props.selectEmployee(el)}>{el.name}</li>
              )

            }
            )
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;
