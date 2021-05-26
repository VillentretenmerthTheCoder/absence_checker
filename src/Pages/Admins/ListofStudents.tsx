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
import Student from '../../Models/Student';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const  ListOfStudents  = (props : any) => {
    const openStudent = (student : Student) => props.history.push({
        pathname:`/admin/edit-student/${student.student_id}`,
        state:{current_id: student.student_id}
    });

    useEffect(() => {
        props.fetchEnrollments();
        props.fetchCourses();
        props.fetchStudents()
       /*  console.log(props.courses);
        console.log(props.enrollments); */
        document.body.style.backgroundColor = "#dee2e6";
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
                        <TableComp cols={cols} data={props.students} TableTitle={"List of students currently enrolled"} onClick={openStudent}  />
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

export default withRouter(connect(mapStateToProps, {fetchEnrollments, fetchCourses, fetchStudents})(ListOfStudents));


// export default MainPageStudent;