import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import {updateTeacher, deleteTeacher} from '../../Actions/Index';
import Student from '../../Models/Student';
import {fetchTeacher} from '../../Actions/Index'
import {connect} from 'react-redux';
import { threadId } from 'worker_threads';
import BackButton from '../../Components/BackButton/BackButton';
import Footer from '../../Components/Footer/Footer';


const  EditTeachers  = (props : any) => {
  

    const [teacher_id, setTeacher_id] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [school_email, setSchool_email] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [password, setPassword] = useState('');


    
    let data = {

        teacher_id:teacher_id,
        name:name,
        surname:surname,
        school_email:school_email,
        phone_number:phone_number,
        password:password
    }
  
    useEffect(() => {
         
        props.fetchTeacher(props.history.location.state.current_id)
        setTeacher_id(props.teacher.teacher_id)
        setName(props.teacher.name)
        setSurname(props.teacher.surname)
        setSchool_email(props.teacher.school_email)
        setPhone_number(props.teacher.phone_number)
        setPassword(props.teacher.password)
        document.body.style.backgroundColor = "#dee2e6";
        
        
    },[props.teacher.teacher_id]);
    
  
    


        const callUpdateStudents = () =>{
            if(
                password !== "" &&
                school_email !== ""){
                    updateTeacher(data,data.teacher_id);
                    window.alert("Valid Form")
                    props.history.push(`../../admin-main`)


            }
            else{
                window.alert('Invalid Form')
            }
        }

        const callDeleteTeacher = () =>{
            deleteTeacher(data.teacher_id);
        }


        return(
            <div className={styles.Wrapper}>

                <NavigationBar/>
                <BackButton urlPath="../../admin-main"/>

                <Container  style={{padding: 0}}>
                    <h2 className={styles.createUserHeadline}>Edit Teacher</h2>
                <Form   className={styles.FormWrapper}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Student_id</Label>
                                <Input id="0"  type="text" name="student_id" value={teacher_id} onChange={e => setTeacher_id(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Name</Label>
                                <Input id="1" type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
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
                    <Button style={{width: '33%'}} onClick={callUpdateStudents}>Edit Teacher</Button>
                    <Button style={{width: '33%'}} onClick={callDeleteTeacher}>Delete Teacher</Button>
                    </Col>

                    </Form>
                   
                </Container>
                <Footer/>

  
    
            </div>
        )
}

const mapStateToProps = (state : any) => {
    return { 
        teacher:state.teacher
    };
}


export default connect(mapStateToProps,{fetchTeacher})(EditTeachers);


// export default MainPageStudent;