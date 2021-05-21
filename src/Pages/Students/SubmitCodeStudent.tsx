import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Input, Label, Row } from 'reactstrap';
import Footer from '../../Components/Footer/Footer';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TableComp from '../../Components/Table/Table';

const  SubmitCodeStudent  = () => {
   
    useEffect(() => {
            document.body.style.backgroundColor = "#dee2e6";
    })

        return(
            <div className={styles.Wrapper}>
                <NavigationBar/>
                <Container fluid style={{padding: 0}}>
                    <Row style={{padding: 0, margin: 0, width: '100%'}}>    
                            <Sidebar/>
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
                                    <Row>
                                        <Col >
                                        <div className="graph">
A
                                        </div>
                                        </Col>
                                        <Col >
                                        <div className="graph_info">
                                            A
                                        </div>
                                        </Col>
                                        <Col >
                                        <div className="graph_filter">
                                            A
                                        </div>
                                        </Col>
                                    </Row>
                                    
                                </div>
                            </Container>

                    </Row>
                </Container>
            </div>
        )
}

export default SubmitCodeStudent;