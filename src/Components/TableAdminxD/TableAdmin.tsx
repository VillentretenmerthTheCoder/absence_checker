import React from 'react';
import { Table, Container, Button, Row } from 'reactstrap';

const TableCompAdmin = () => {
    return(
        <Container style={{position: 'relative'}} >
            <div>
                <h2 style={{marginTop: '40px', display: 'flex', justifyContent: 'center'}}>List of all courses</h2>   
                <Table hover style={{backgroundColor: 'white', marginTop: '40px'}}>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Subject</th>
                        <th>Teacher</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>DLS</td>
                        <td>Andrea</td>
                        <td>Delete/Edit</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Databases</td>
                        <td>Tomas</td>
                        <td>Delete/Edit</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Dlete</td>
                        <td>Steffen</td>
                        <td>Delete/Edit</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}


export default TableCompAdmin;