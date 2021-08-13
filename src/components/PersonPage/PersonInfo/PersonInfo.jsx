import PropTypes from 'prop-types'
import React from "react";

import styles from './PersonInfo.module.css'

const PersonInfo = ({personInfo}) => {

    // if (!personInfo.length) {
    //     return <Loader/>
    // }

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {personInfo.map(({title, data}) => (
                    data && (
                        <li className={styles.list__item} key={title}>
                            <span className={styles.item__title}>{title}</span>: {data}
                        </li>
                    )
                ))}
            </ul>
        </div>
    )
}

PersonInfo.defaultProps = {
    personInfo: []
}

PersonInfo.propTypes = {
    personInfo: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        data: PropTypes.string
    }))
}

export default PersonInfo