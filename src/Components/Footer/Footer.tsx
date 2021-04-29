import React, { useState } from 'react';

  
import styles from './Footer.module.scss';

const  Footer  = () => {
 
        return(
        <div className={styles.Wrapper}>
            <div className={styles.Footer}>
                <span style={{marginTop: 10}} >DLS - Absence Checker</span> 
            </div>
        </div>
        );
}

export default Footer;