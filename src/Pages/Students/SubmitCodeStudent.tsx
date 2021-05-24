import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Input, Label, Row } from 'reactstrap';
import Footer from '../../Components/Footer/Footer';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TableComp from '../../Components/Table/Table';
import { Chart } from "react-google-charts";

const  SubmitCodeStudent  = () => {
    useEffect(() => {
            document.body.style.backgroundColor = "#dee2e6";
    })
        return(
            <div className={styles.Wrapper}>
                <NavigationBar/>
                <Container fluid style={{padding: 0}}>
                    <Row style={{padding: 0, margin: 0, width: '100%'}}>    
                            <Container style={{position: 'relative'}} >

                                <div className={styles.SubmitCodeWrapper}>
                                    <div className={styles.BoxSubmit}>
                                        <Form className={styles.CodeForm} >
                                            <Label>Submit Code</Label>
                                            <Input className={styles.CodeInput} type="text" />
                                            <Button className={styles.CodeButton} >Submit Code</Button>
                                        </Form>
                                    </div>
                                </div>
                                <h1 style={{marginTop: '100px', textAlign: 'center'}}>Statistics</h1>
                                <div className={styles.StudentStatistics}>
                                    <Container>
                                        <Row>
                                            <Col >
                                            <div className="graph">
                                            <Chart
                                                width={'600px'}
                                                height={'400px'}
                                                chartType="PieChart"
                                                loader={<div>Loading Chart</div>}
                                                data={[
                                                    ['Status', 'Hours'],
                                                    ['Activity', 24],
                                                    ['Inactivity', 12],
                                                   
                                                ]}
                                                options={{
                                                    title: 'Student Status',
                                                    backgroundColor: 'transparent'
                                              
                                                    // Just add this option
                                                }}
                                                />
                                            </div>
                                            </Col>
                                            
                                            <Col >
                                            <div className="graph_filter">
                                                A
                                            </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                    
                                </div>
                            </Container>

                    </Row>
                </Container>
            </div>
        )
}

export default SubmitCodeStudent;