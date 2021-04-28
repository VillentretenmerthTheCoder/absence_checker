import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import NavigationBar from '../../Components/Navbar/NavigationBar';
import styles from './MainPage.module.scss';

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
                            <h6>Software Testing</h6>
                            <Button style={{marginLeft: 250,marginRight: 20}}> Code</Button>
                            <Button> Stats</Button>
                        </div>
                   </Row>
                   <Row style={{display: 'flex', justifyContent: 'center'}} >

                        <div className={styles.box_subject}>
                            <h6>Software Testing</h6>
                            <Button style={{marginLeft: 250,marginRight: 20}}> Code</Button>
                            <Button> Stats</Button>
                        </div>
                    </Row>

                    <Row style={{display: 'flex', justifyContent: 'center'}} >

                        <div className={styles.box_subject}>
                            <h6>Software Testing</h6>
                            <Button style={{marginLeft: 250,marginRight: 20}}> Code</Button>
                            <Button> Stats</Button>
                        </div>                   
                    </Row>

                </Container>
                
            </div>
        )
}

export default MainPageStudent;