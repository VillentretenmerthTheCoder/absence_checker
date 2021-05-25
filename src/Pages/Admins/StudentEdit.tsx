import React, { useEffect } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import {updateStudent} from '../../Actions/Index';
import Student from '../../Models/Student';
const  EditStudents  = (props : any) => {
    useEffect(() => {
        document.body.style.backgroundColor = "#dee2e6";
    },[]);

    let student_id = (document.getElementById("0") as HTMLInputElement).valueAsNumber;
    let name = (document.getElementById("1") as HTMLInputElement).value;
    let surname = (document.getElementById("2") as HTMLInputElement).value;
    let email = (document.getElementById("3") as HTMLInputElement).value;
    let phone_number = (document.getElementById("4") as HTMLInputElement).value;
    let password = (document.getElementById("5") as HTMLInputElement).value;

    let data:Student = {

        student_id:student_id,
        name:name,
        surname:surname,
        school_email:email,
        phone_number:phone_number,
        password:password
    }

        const callUpdateStudents = () =>{
            updateStudent(data);
        }

        return(
            <div className={styles.Wrapper}>

                <NavigationBar/>
                <Container  style={{padding: 0}}>
                    <h2 className={styles.createUserHeadline}>Edit Student</h2>
                <Form className={styles.FormWrapper}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Student_id</Label>
                                <Input id="0" type="text" name="name" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Name</Label>
                                <Input id="1" type="text" name="name" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Surname</Label>
                                <Input id="2" type="text" name="surname"  />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input id="3" type="email" name="email"  />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Phone number</Label>
                                <Input id="4" type="text" name="password"  />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">Password</Label>
                        <Input id="5" type="text" name="address"  />
                    </FormGroup>
                    <Col className={styles.buttonWrapper}  md={12}>
                    <Button style={{width: '33%'}} onClick={callUpdateStudents}>Edit Student</Button>
                    </Col>

                    </Form>

                   
                </Container>
  
    
            </div>
        )
}


export default EditStudents;


// export default MainPageStudent;