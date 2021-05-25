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
import {fetchCourses, fetchEnrollments, fetchStudents, fetchTeachers, fetchTeachings} from '../../Actions/Index'
import Courses from '../../Models/Courses';

const  ListOfTeachers  = (props : any) => {
    const openCourse = (course : Courses) => props.history.push(`/student-edit/${course.course_id}`);

    useEffect(() => {
        props.fetchTeachers();
       /*  console.log(props.courses);
        console.log(props.enrollments); */
        document.body.style.backgroundColor = "#dee2e6";
    },[]);
    const cols = [
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
                        <TableComp cols={cols} data={props.teachers} TableTitle={"List of Teachers"} onClick={openCourse}  />
                    </Row>
                </Container>
            </div>
        )
}

const mapStateToProps = (state : any) => {
    return { 
        teachers:state.teachers
    };
}

export default connect(mapStateToProps, {fetchTeachers})(ListOfTeachers);


// export default MainPageStudent;