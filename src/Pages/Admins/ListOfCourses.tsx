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

const  ListOfCourses  = (props : any) => {
    const openCourse = (course : Courses) => props.history.push({
        pathname:`/admin/edit-courses/${course.course_id}`,
        state:{current_id: course.course_id}
    });


    useEffect(() => {
        props.fetchCourses();
       /*  console.log(props.courses);
        console.log(props.enrollments); */
        document.body.style.backgroundColor = "#dee2e6";
    },[]);
    const cols = [
        { key: 'course_id', title: 'Course_id' },
        { key: 'course_name', title: 'Course_name' },
      ];


  
        return(
            <div className={styles.Wrapper}>
                <NavigationBar/>
                <Container fluid style={{padding: 0}}>
                    <Row style={{padding: 0, margin: 0}}>                    
                        <TableComp cols={cols} data={props.courses} TableTitle={"List of current courses"} onClick={openCourse}  />
                    </Row>
                </Container>
            </div>
        )
}

const mapStateToProps = (state : any) => {
    return {
        courses: state.courses,
    };
}

export default connect(mapStateToProps, {fetchCourses})(ListOfCourses);


// export default MainPageStudent;