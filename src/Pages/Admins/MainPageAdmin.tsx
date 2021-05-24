import React, { useEffect } from 'react';
import { Button, Container, Row } from 'reactstrap';
import Footer from '../../Components/Footer/Footer';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TableCompAdmin from '../../Components/TableAdminxD/TableAdmin';
import { connect } from 'react-redux';
import {fetchCourses, fetchEnrollments} from '../../Actions/Index'

const  MainPageAdmin  = (props : any) => {
    useEffect(() => {
        props.fetchEnrollments();
        props.fetchCourses();
        console.log(props.courses);
        console.log(props.enrollments);
        document.body.style.backgroundColor = "#dee2e6";
    })
        return(
            <div className={styles.Wrapper}>
                <NavigationBar/>
                <Container fluid style={{padding: 0}}>
                    <Row style={{padding: 0, margin: 0}}>                    
                        <Sidebar/>
                        <TableCompAdmin/> 
                        <Button style={{backgroundColor: "#EA5045", border: 0}} className={styles.submit_button}>See all students</Button>
                        <Button style={{backgroundColor: "#EA5045", border: 0}} className={styles.submit_button}>See all teachers</Button>
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

export default connect(mapStateToProps, {fetchEnrollments, fetchCourses})(MainPageAdmin);


// export default MainPageStudent;