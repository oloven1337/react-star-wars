import React from "react";
import PropTypes from 'prop-types'
import Loader from "../../Loaders/Loader";

import styles from './PersonPhoto.module.css'

const PersonPhoto = ({personPhoto, personName}) => {
    if (!personPhoto) {
        return <Loader/>
    }
    return (
        <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt={personName}/>
        </div>
    )
}

PersonPhoto.defaultProps = {
    personPhoto: '',
    personName: ''
}

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
}

export default PersonPhoto