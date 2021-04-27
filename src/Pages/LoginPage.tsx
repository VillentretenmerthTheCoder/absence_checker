import React, { Component } from 'react';
import styles from './LoginPage.module.scss';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ProjectDetails extends Component {
    render(){
        return(
        <div className={styles.wrapper}>
            <div className={styles.form_wrapper}>
                <Form className={styles.form_group} >
                    <Label style={{marginBottom: 50, color: "#EA5045"}} for="exampleEmail"><h2 >Login</h2></Label>
                    <FormGroup  className="mb-2 mr-sm-2 mb-sm-0">
                        <Label style={{marginBottom: 10}} for="exampleEmail" className="mr-sm-2">Email</Label>
                        <Input  style={{marginBottom: 20}} type="email" name="email" id="exampleEmail" placeholder="Provide your email" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Provide your password" />
                    </FormGroup>
                    <Button style={{backgroundColor: "#EA5045", border: 0}} className={styles.submit_button}>Submit</Button>
                </Form>
            </div>
        </div>);
    }
}

export default ProjectDetails;