import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import {updateStudent} from '../../Actions/Index';
import Student from '../../Models/Student';
const  EditStudents  = (props : any) => {
    useEffect(() => {
        document.body.style.backgroundColor = "#dee2e6";

        
    },[]);
    
    const [student_id, setStudent_id] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [school_email, setSchool_email] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [password, setPassword] = useState('');


    let data = {

        student_id:student_id,
        name:name,
        surname:surname,
        school_email:school_email,
        phone_number:phone_number,
        password:password
    }

        const callUpdateStudents = () =>{
            updateStudent(data,data.student_id);
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
                                <input id="0" type="text" name="student_id" value={student_id} onChange={e => setStudent_id(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Name</Label>
                                <input id="1" type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Surname</Label>
                                <input id="2" type="text" name="surname" value={surname} onChange={e => setSurname(e.target.value)} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <input id="1" type="email" name="school_email" value={school_email} onChange={e => setSchool_email(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Phone number</Label>
                                <input id="1" type="text" name="phone_number" value={phone_number} onChange={e => setPhone_number(e.target.value)} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">Password</Label>
                        <input id="1" type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} />
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