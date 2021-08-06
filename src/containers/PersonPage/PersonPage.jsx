import React from "react";
import PropTypes from 'prop-types'
import {getApiResource} from "../../utils/network";
import {API_PERSON} from "../../constans/api";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import {getPeopleImage} from '../../services/getPeopleData'
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";

import styles from './PersonPage.module.css'

const PersonPage = ({match, setErrorApi}) => {
    const [personInfo, setPersonInfo] = React.useState([])
    const [personName, setPersonName] = React.useState('')
    const [personPhoto, setPersonPhoto] = React.useState('')
    console.log(setErrorApi)
    React.useEffect(() => {
        (async () => {
            const id = match.params.id
            const res = await getApiResource(`${API_PERSON}/${id}/`)

            if (res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Gender', data: res.gender},
                    {title: 'Mass', data: res.mass},
                ])

                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))
                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })()
    }, [])

    return (
        <div className={styles.wrapper}>
            <span className={styles.person}>{personName}</span>

            <PersonPhoto
                personPhoto={personPhoto}
                personName={personName}
            />

            {personInfo && <PersonInfo personInfo={personInfo}/>}
        </div>
    )
}

PersonPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
    setErrorApi: PropTypes.func.isRequired
}

export default withErrorApi(PersonPage)