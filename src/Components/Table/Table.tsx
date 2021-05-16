import React from 'react';
import { Table, Container, Button, Row } from 'reactstrap';

const TableComp = () => {
    return(
        <Container style={{position: 'relative'}} >
            <div>
                <h2 style={{marginTop: '40px', display: 'flex', justifyContent: 'center'}}>List of available courses</h2>   
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
                        <td>...</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Databases</td>
                        <td>Tomas</td>
                        <td>...</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Testing</td>
                        <td>Steffen</td>
                        <td>...</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}


export default TableComp;