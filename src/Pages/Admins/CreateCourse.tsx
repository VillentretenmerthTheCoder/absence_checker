import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { postCourse } from '../../Actions/Index';
import BackButton from '../../Components/BackButton/BackButton';
import Footer from '../../Components/Footer/Footer';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
const  CreateCourse  = (props : any) => {
    useEffect(() => {
        document.body.style.backgroundColor = "#dee2e6";
    },[]);

    const[name,setName] = useState('')


    let data={
        course_name:name 
    }

    const callPostCourse = () =>{
        if(name !== ""){
            postCourse(data)
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
                    <h2 className={styles.createUserHeadline}>Create a New Course</h2>
                <Form className={styles.FormWrapper}>
                    <FormGroup>
                        <Label for="exampleAddress">Name of the course</Label>
                        <Input id="1" type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                    </FormGroup>
                    <Col className={styles.buttonWrapper}  md={12}>
                    <Button style={{width: '33%'}} onClick={callPostCourse}>Add Course</Button>
                    </Col>

                    </Form>

                   
                </Container>
            <Footer/>
    
            </div>
        )
}


export default CreateCourse;
