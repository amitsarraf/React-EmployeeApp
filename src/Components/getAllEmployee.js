
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


export default class getAllEmployee extends Component {
    state = {
        loading: true,
        employee: [],
    }

    async componentDidMount(){

        const response = await fetch("/api/employee");
        const data = await response.json();
        this.setState({employee: data.employeeArray, loading:false})
        console.log(data.employeeArray);
    }

    render() {
        //  console.log(this.state);

        return (
          <div>
              <h1>List of Users</h1>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee Details</th>
                        <th>Employee Education</th>
                        <th>Employee prevCompany</th>
                        <th>Employee Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employee.map((posts, index)=>{
                      return  <tr key={index}>
                            <td>{posts.id}</td>
                            <td>{posts.employeeDetails}</td>
                            <td>{posts.employeeEducation}</td>
                            <td>{posts.employeePrevCmpny}</td>
                            <td>{posts.employeeSalary}</td>
                    </tr>
                    
                    })}
                    
                </tbody>
            </Table>
            </div>
           
        )
    }
}
