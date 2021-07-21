import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';


export default class StudentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: []
        };
    }

    componentDidMount() {
        // axios.get('http://localhost:4000/students/')
        //   .then(res => {
        //     this.setState({
        //       students: res.data
        //     });
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
        fetch(`http://localhost:3000/students/`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    students: data
                });
            });
    }

    DataTable() {
        return this.state.students.map((res, i) => {
            return <StudentTableRow obj={res} key={i} />;
        });
    }


    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }
}