import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import {postStudent, updateStudent} from '../../Actions/Index';
import Student from '../../Models/Student';
import BackButton from '../../Components/BackButton/BackButton';
import Footer from '../../Components/Footer/Footer';
const  CreateStudents  = (props : any) => {
    useEffect(() => {
        document.body.style.backgroundColor = "#dee2e6";

        
    },[]);
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [school_email, setSchool_email] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [password, setPassword] = useState('');


    let data = {

        name:name,
        surname:surname,
        school_email:school_email,
        phone_number:phone_number,
        password:password
    }

        const callUpdateStudents = () =>{
            if(name !== ""){
                postStudent(data);
                window.alert("Valid Form");
                props.history.push(`../../admin-main`)
            }
            else{
                 window.alert('Invalid Form')
            }
        }

        return(
            <div className={styles.Wrapper}>

                <NavigationBar/>
                <BackButton urlPath="../../admin-main"/>

                <Container  style={{padding: 0}}>
                    <h2 className={styles.createUserHeadline}>Add Student</h2>
                <Form className={styles.FormWrapper}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label  for="exampleEmail">Name</Label>
                                <Input  put id="1" type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Surname</Label>
                                <Input id="2" type="text" name="surname" value={surname} onChange={e => setSurname(e.target.value)} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input id="1" type="email" name="school_email" value={school_email} onChange={e => setSchool_email(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Phone number</Label>
                                <Input id="1" type="text" name="phone_number" value={phone_number} onChange={e => setPhone_number(e.target.value)} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">Password</Label>
                        <Input id="1" type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </FormGroup>
                    <Col className={styles.buttonWrapper}  md={12}>
                    <Button style={{width: '33%'}} onClick={callUpdateStudents}>Add Student</Button>
                    </Col>

                    </Form>

                   
                </Container>
                <Footer/>

    
            </div>
        )
}


export default CreateStudents;


// export default MainPageStudent;