import React, { useState } from 'react';
import styles from './Sidebar.module.scss';

const  NavigationBar  = () => {

        return(
            <div className={styles.wrapper}>
                <div className={styles.sidebar} id="sidebar">
                    <ul className={styles.listElements}>
                        <h4 style={{color: 'white'}}>Sidebar</h4>
                        <li>
                            <a href="#">Statistics</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
        </div>
        );
}

export default NavigationBar;