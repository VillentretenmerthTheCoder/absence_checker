import React, { useEffect } from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import Footer from '../../Components/Footer/Footer';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { connect } from 'react-redux';
import {fetchCourses, fetchEnrollments, fetchStudents} from '../../Actions/Index'
import TableComp from '../../Components/Table/Table';
import Student from '../../Assets/Images/Student.jpg';
import Teacher from '../../Assets/Images/Teacher.jpg';
import Subject from '../../Assets/Images/Subject.jpg';


const  MainPageAdmin  = (props : any) => {
    useEffect(() => {
        props.fetchEnrollments();
        props.fetchCourses();
        props.fetchStudents();
       
        document.body.style.backgroundColor = "#dee2e6";
    },[]);

    const cols = [
        { key: 'student_id', title: 'Id' },
        { key: 'name', title: 'Name' },
        { key: 'surname', title: 'Surname' },
        { key: 'mobile_phone', title: 'Phone' },
        { key: 'school_email', title: 'Email' },

      ];

      const data = [
        {  key: "Id", title: "1"},
        { key: 'Teacher', title: 'Andrea' },
        { key: 'Subject', title: 'DLS' },
      ];
        return(
            <div className={styles.Wrapper}>
                <NavigationBar/>
                <Container   style={{padding: 0}}>

                    <Row style={{padding: 0, marginTop: 50}}>
                        <Col sm={4}>
                            <Card>
                                <CardImg top width="100%" src={Student} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">Create new Student</CardTitle>
                                    <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus possimus vitae atque quos doloribus corrupti neque quasi! Dicta iste ab, aliquid adipisci ad perferendis eius eum ipsum natus impedit?.</CardText>
                                    <div className={styles.buttonWrapper}>
                                        <Button onClick={() => props.history.push(`admin/create-students`)}>Go to page</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <CardImg top width="100%" style={{maxHeight: '300'}} src={Teacher} alt="Card image cap" />
                                <CardBody>
                                <CardTitle tag="h5">Create new Teacher</CardTitle>
                                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus possimus vitae atque quos doloribus corrupti neque quasi! Dicta iste ab, aliquid adipisci ad perferendis eius eum ipsum natus impedit?.</CardText>
                                <div className={styles.buttonWrapper}>
                                    <Button onClick={() => props.history.push(`admin/create-teachers`)}>Go to page</Button>
                                </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <CardImg top width="100%" src={Subject} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">Create new Course</CardTitle>
                                    <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus possimus vitae atque quos doloribus corrupti neque quasi! Dicta iste ab, aliquid adipisci ad perferendis eius eum ipsum natus impedit?.</CardText>
                                    <div className={styles.buttonWrapper}>
                                        <Button onClick={() => props.history.push(`admin/create-courses`)}>Go to page</Button>
                                    </div>                                
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{padding: 0, marginTop: 50}}>
                        <Col sm={4}>
                            <Card>
                                <CardImg top width="100%" src={Student} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">List all Students</CardTitle>
                                    <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus possimus vitae atque quos doloribus corrupti neque quasi! Dicta iste ab, aliquid adipisci ad perferendis eius eum ipsum natus impedit?.</CardText>
                                    <div className={styles.buttonWrapper}>
                                    <Button>Go to page</Button>
                                </div>                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <CardImg top width="100%" src={Teacher} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">List all Teachers</CardTitle>
                                    <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus possimus vitae atque quos doloribus corrupti neque quasi! Dicta iste ab, aliquid adipisci ad perferendis eius eum ipsum natus impedit?.</CardText>
                                    <div className={styles.buttonWrapper}>
                                        <Button>Go to page</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <CardImg top width="100%" src={Subject} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">List all Subjects</CardTitle>
                                    <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus possimus vitae atque quos doloribus corrupti neque quasi! Dicta iste ab, aliquid adipisci ad perferendis eius eum ipsum natus impedit?.</CardText>
                                    <div className={styles.buttonWrapper}>
                                        <Button>Go to page</Button>
                                    </div>                                
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
 

              
                   
                   
                </Container>
  
              
    
            </div>
        )
}

const mapStateToProps = (state : any) => {
    return { enrollments : state.enrollments,
        courses: state.courses,
        students: state.students
    };
}

export default connect(mapStateToProps, {fetchEnrollments, fetchCourses, fetchStudents})(MainPageAdmin);


// export default MainPageStudent;