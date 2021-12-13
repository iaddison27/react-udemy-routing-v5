import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './Layout.module.css';
import MainNavigation from "./MainNavigation";

function Layout(props) {

    return (
        <React.Fragment>
            <MainNavigation />
            <main className={styles.main}>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default Layout;
