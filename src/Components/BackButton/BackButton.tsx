import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBackward } from '@fortawesome/free-solid-svg-icons'

import styles from './BackButton.module.scss';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const  BackButton  = (props : any) => {
 
        return(
        <div  className={styles.BackButton}>
            <Link  to={props.urlPath}    color="info">
            <FontAwesomeIcon icon={faBackward} size="xs" />
            <span>Go back</span>
            </Link>
        </div>
        );
}

export default BackButton;