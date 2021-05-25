import React, { useEffect } from 'react';
import { Button, Container, Row } from 'reactstrap';
import Footer from '../../Components/Footer/Footer';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TableComp from '../../Components/Table/Table';
import { connect } from 'react-redux';
import {fetchCourses, fetchEnrollments} from '../../Actions/Index'
import Courses from '../../Models/Courses';

const  MainPageStudent  = (props : any) => {
    const openAttendance = (course : Courses) => props.history.push(`/student-submit/${course.course_id}`);

    useEffect(() => {
        props.fetchEnrollments();
        props.fetchCourses();
       console.log(props.courses);
        console.log(props.enrollments);
        document.body.style.backgroundColor = "#dee2e6";
    },[]);
    const cols = [
        { key: 'course_id', title: 'Id' },
        { key: 'course_name', title: 'Course' },
        { key: 'Subject', title: 'Subject' },
      ];


      const data = [
        { Id: 1, Teacher: "Andrea", Subject: "DLS" },
        {  Id: 2, Teacher: "Andrea", Subject: "DLS" },
        {  Id: 3, Teacher: "Andrea", Subject: "DLS" },
      ];
        return(
            <div className={styles.Wrapper}>
                <NavigationBar/>
                <Container fluid style={{padding: 0}}>
                    <Row style={{padding: 0, margin: 0}}>                    
                        <TableComp cols={cols} data={props.courses} TableTitle={"List of available courses"} onClick={openAttendance}  />
                    </Row>
                </Container>
            </div>
        )
}

const mapStateToProps = (state : any) => {
    return { enrollments : state.enrollments,
        courses: state.courses
    };
}

export default connect(mapStateToProps, {fetchEnrollments, fetchCourses})(MainPageStudent);


// export default MainPageStudent;