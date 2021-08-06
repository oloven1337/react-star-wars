import React from "react";

import img from './img/not-found.png'
import styles from './NotFoundPage.module.css'
import {useLocation} from "react-router-dom";

const NotFoundPage = () => {
    const location = useLocation()

    return (
        <>
            <img className={styles.img} src={img} alt="not-found"/>
            <p className={styles.text}>No match for <u>{location.pathname}</u></p>
        </>
    )
}

export default NotFoundPage