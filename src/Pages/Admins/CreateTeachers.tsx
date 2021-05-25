import React, { useEffect } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
const  CreateTeachers  = (props : any) => {
    useEffect(() => {
        document.body.style.backgroundColor = "#dee2e6";
    },[]);

        return(
            <div className={styles.Wrapper}>

                <NavigationBar/>
                <Container  style={{padding: 0}}>
                    <h2 className={styles.createUserHeadline}>Create a New Teacher</h2>
                <Form className={styles.FormWrapper}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Name</Label>
                                <Input type="email" name="name" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Surname</Label>
                                <Input type="password" name="surname"  />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email"  />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Phone number</Label>
                                <Input type="password" name="password"  />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">Password</Label>
                        <Input type="text" name="address"  />
                    </FormGroup>
                    <Col className={styles.buttonWrapper}  md={12}>
                    <Button style={{width: '33%'}}>Add Teacher</Button>
                    </Col>

                    </Form>

                   
                </Container>
  
    
            </div>
        )
}


export default CreateTeachers;
