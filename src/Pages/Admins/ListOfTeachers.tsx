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
import Teacher from '../../Models/Teacher';
import BackButton from '../../Components/BackButton/BackButton';

const  ListOfTeachers  = (props : any) => {
    const openTeacher = (teacher : Teacher) => props.history.push({
        pathname:`/admin/edit-teachers/${teacher.teacher_id}`,
        state:{current_id: teacher.teacher_id}
    });

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
                <BackButton urlPath="../../admin-main"/>

                <Container fluid style={{padding: 0}}>
                    <Row style={{padding: 0, margin: 0}}>                    
                        <TableComp cols={cols} data={props.teachers} TableTitle={"List of Teachers"} onClick={openTeacher}  />
                    </Row>
                </Container>
                <Footer/>

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