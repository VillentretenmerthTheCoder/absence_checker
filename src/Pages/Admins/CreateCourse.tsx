import React, { useEffect } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
const  CreateCourse  = (props : any) => {
    useEffect(() => {
        document.body.style.backgroundColor = "#dee2e6";
    })

        return(
            <div className={styles.Wrapper}>

                <NavigationBar/>
                <Container  style={{padding: 0}}>
                    <h2 className={styles.createUserHeadline}>Create a New Course</h2>
                <Form className={styles.FormWrapper}>
                    <FormGroup>
                        <Label for="exampleAddress">Name of the course</Label>
                        <Input type="text" name="address"  />
                    </FormGroup>
                    <Col className={styles.buttonWrapper}  md={12}>
                    <Button style={{width: '33%'}}>Add Course</Button>
                    </Col>

                    </Form>

                   
                </Container>
  
    
            </div>
        )
}


export default CreateCourse;
