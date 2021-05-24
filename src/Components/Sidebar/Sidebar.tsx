import React, { useState } from 'react';
import styles from './Sidebar.module.scss';

const  NavigationBar  = (props : any) => {

        return(
            <div className={styles.wrapper}>
                <div className={styles.sidebar} id="sidebar">
                    <ul className={styles.listElements}>
                        <h4 style={{color: 'white'}}>Sidebar</h4>
                        <li>
                            <a href={props.sidebarItem1Link}>{props.sidebarItem1}</a>
                        </li>
                        <li>
                            <a href={props.sidebarItem2Link}>{props.sidebarItem2}</a>
                        </li>
                    </ul>
                </div>
        </div>
        );
}

export default NavigationBar;