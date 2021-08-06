import PropTypes from 'prop-types'
import styles from './PersonInfo.module.css'
import React from "react";

const PersonInfo = ({personInfo}) => {
    return (
            <div>
                <ul>
                    {personInfo.map(({title, data}) => (
                        data && (
                            <li key={title}>
                                <span>{title}: {data}</span>
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
    personInfo:PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        data:PropTypes.string
    }))
}

export default PersonInfo