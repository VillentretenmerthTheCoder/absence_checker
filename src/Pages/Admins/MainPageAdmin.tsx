import React, { useEffect } from 'react';
import { Button, Container, Row } from 'reactstrap';
import Footer from '../../Components/Footer/Footer';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { connect } from 'react-redux';
import {fetchCourses, fetchEnrollments, fetchStudents} from '../../Actions/Index'
import TableComp from '../../Components/Table/Table';

const  MainPageAdmin  = (props : any) => {
    useEffect(() => {
        props.fetchEnrollments();
        props.fetchCourses();
        props.fetchStudents();
       
        document.body.style.backgroundColor = "#dee2e6";
    })

    const cols = [
        { key: 'student_id', title: 'Id' },
        { key: 'name', title: 'Name' },
        { key: 'surname', title: 'Surname' },
        { key: 'phone_number', title: 'Phone' },
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
                <Container fluid style={{padding: 0}}>
                    <Row style={{padding: 0, margin: 0}}>                    
                        <TableComp cols={cols} data={props.students } onClick={() => console.log("AA")}  />
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