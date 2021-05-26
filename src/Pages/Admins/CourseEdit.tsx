import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import {postCourse, updateCourse} from '../../Actions/Index';
import Student from '../../Models/Student';
import {fetchCourse} from '../../Actions/Index'
import {connect} from 'react-redux';
import { threadId } from 'worker_threads';
const  EditCourses  = (props : any) => {
  
    const [course_id, setCourse_id] = useState('');
    const [course_name, setCourse_name] = useState('');
 

    
    let data = {

        course_id:course_id,
        course_name:course_name
       
    }
  
    useEffect(() => {
         
        props.fetchCourse(props.history.location.state.current_id)
        setCourse_id(props.course.course_id)
        setCourse_name(props.course.course_name)
        document.body.style.backgroundColor = "#dee2e6";
        
        
    },[props.course.course_id]);
    
  
    
  



        const callUpdateCourse = () =>{
            updateCourse(data,data.course_id);
        }

        return(
            <div className={styles.Wrapper}>

                <NavigationBar/>
                <Container  style={{padding: 0}}>
                    <h2 className={styles.createUserHeadline}>Edit Student</h2>
                <Form className={styles.FormWrapper}>
 
                    <FormGroup>
                        <Label for="exampleAddress">Id  </Label>
                        <input id="1" type="text" name="name" value={course_id} onChange={e => setCourse_id(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">Name  </Label>
                        <input id="1" type="text" name="name" value={course_name} onChange={e => setCourse_name(e.target.value)} />
                    </FormGroup>
                    <Col className={styles.buttonWrapper}  md={12}>
                    <Button style={{width: '33%'}} onClick={callUpdateCourse}>Edit Student</Button>
                    </Col>

                    </Form>

                   
                </Container>
  
    
            </div>
        )
}

const mapStateToProps = (state : any) => {
    return { 
        course:state.course
    };
}


export default connect(mapStateToProps,{fetchCourse})(EditCourses);


// export default MainPageStudent;