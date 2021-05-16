import React, { useEffect } from 'react';
import { Button, Container, Row } from 'reactstrap';
import Footer from '../../Components/Footer/Footer';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TableComp from '../../Components/Table/Table';

const  MainPageStudent  = () => {

   
    useEffect(() => {
            document.body.style.backgroundColor = "#dee2e6";
    })

        return(
            <div className={styles.Wrapper}>
                                <NavigationBar/>

                <Container fluid style={{padding: 0}}>
                    <Row style={{padding: 0, margin: 0}}>                    
                            <Sidebar/>
                            <TableComp/>
                    </Row>
                </Container>
            </div>
        )
}

export default MainPageStudent;