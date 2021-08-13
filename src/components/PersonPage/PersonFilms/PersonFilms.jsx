import React from "react";
import PropTypes from 'prop-types'
import {makeConcurrentRequest, changeHTTP} from "../../../utils/network";

import styles from './PersonFilms.module.css'

const PersonFilms = ({personFilms}) => {
    const [filmsName, setFilmsName] = React.useState([])

    React.useEffect(() => {

        const fun = async () => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url))
            return await makeConcurrentRequest(filmsHTTPS)
        }

        fun()
            .then(res => {
                setFilmsName(res)
            })

    }, [personFilms])

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsName
                    .sort((a, b) => a.episode_id - b.episode_id)
                    .map(({title, episode_id}) =>
                        (<li className={styles.list__item} key={episode_id}>
                            <span className={styles.item__episode}>Episode {episode_id}</span>
                            <span className={styles.item__colon}> : </span>
                            <span className={styles.item__title}>{title}</span>
                        </li>)
                    )
                }
            </ul>
        </div>
    )
}

PersonFilms.propTypes = {
    personFilms: PropTypes.arrayOf(PropTypes.string)
}

export default PersonFilms