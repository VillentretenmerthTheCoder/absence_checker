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
import {fetchCourses, fetchEnrollments, fetchStudents} from '../../Actions/Index'
import Courses from '../../Models/Courses';

const  ListOfStudents  = (props : any) => {
    const openCourse = (course : Courses) => props.history.push(`/student-edit/${course.course_id}`);

    useEffect(() => {
        props.fetchEnrollments();
        props.fetchCourses();
        props.fetchStudents()
        console.log(props.students);
       /*  console.log(props.courses);
        console.log(props.enrollments); */
        document.body.style.backgroundColor = "#dee2e6";
        console.log(props.students);
    },[]);
    const cols = [
        {key: 'student_id', title:'Student_id'},
        { key: 'name', title: 'Name' },
        { key: 'surname', title: 'Surname' },
        { key: 'school_email', title: 'School email' },
        { key: 'phone_number', title: 'Phone number' },
      ];


  
        return(
            <div className={styles.Wrapper}>
                <NavigationBar/>
                <Container fluid style={{padding: 0}}>
                    <Row style={{padding: 0, margin: 0}}>                    
                        <TableComp cols={cols} data={props.students} TableTitle={"List of students currently enrolled"} onClick={openCourse}  />
                    </Row>
                </Container>
            </div>
        )
}

const mapStateToProps = (state : any) => {
    return { enrollments : state.enrollments,
        courses: state.courses,
        students:state.students
    };
}

export default connect(mapStateToProps, {fetchEnrollments, fetchCourses, fetchStudents})(ListOfStudents);


// export default MainPageStudent;