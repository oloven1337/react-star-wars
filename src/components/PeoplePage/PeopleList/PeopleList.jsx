import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import styles from './PeopleList.module.css'

const PeopleList = ({people}) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({name, id, img}) => (
                <li className={styles.list__item} key={id}>
                    <Link to={`/people/${id}`}>
                        <img className={styles.person__photo} src={img} alt={name}/>
                        <p>{name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

PeopleList.defaultProps = {
    people: []
}

PeopleList.propTypes = {
    people: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.string,
            img: PropTypes.string
        })
    )
}

export default PeopleList