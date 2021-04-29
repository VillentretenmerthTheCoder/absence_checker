import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import Footer from '../../Components/Footer/Footer';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const  MainPageStudent  = () => {

        return(
            <div>
                <NavigationBar/>
                <Container>
                    <Row style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                        <h2>List of available courses</h2>                             
                    </Row>
                    <Row style={{display: 'flex', justifyContent: 'center'}} >
                        <div className={styles.box_subject}>
                            <FontAwesomeIcon style={{fontSize: 25}} icon={faDatabase} size="lg" />
                            <h6 >Software Testing</h6>
                            <Button > Code</Button>
                            <Button> Stats</Button>

                        </div>
                   </Row>
                   <Row style={{display: 'flex', justifyContent: 'center'}} >

                   <div className={styles.box_subject}>
                            <FontAwesomeIcon style={{fontSize: 25}} icon={faDatabase} size="lg" />
                            <h6 >Software Testing</h6>
                            <Button > Code</Button>
                            <Button> Stats</Button>

                        </div>
                    </Row>

                    <Row style={{display: 'flex', justifyContent: 'center'}} >
                    <div className={styles.box_subject_active}>
                            <FontAwesomeIcon style={{fontSize: 25}} icon={faDatabase} size="lg" />
                            <h6 >Software Testing</h6>
                            <Button > Code</Button>
                            <Button> Stats</Button>
                        </div>           
                    </Row>

                </Container>
                <Footer/>
            </div>
        )
}

export default MainPageStudent;