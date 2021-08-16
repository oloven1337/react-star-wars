import React, {Suspense, lazy} from "react";
import {useSelector} from "react-redux";
import PropTypes from 'prop-types'
import {getApiResource} from "../../utils/network";
import {API_PERSON} from "../../constans/api";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import {getPeopleImage} from '../../services/getPeopleData'
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack'
import UiLoading from "../../components/UI/UiLoading";

import styles from './PersonPage.module.css'

const PersonPage = ({match, setErrorApi}) => {

    const PersonFilms = lazy(() => import('../../components/PersonPage/PersonFilms'))

    const [personId, setPersonId] = React.useState(null)
    const [personInfo, setPersonInfo] = React.useState([])
    const [personName, setPersonName] = React.useState('')
    const [personPhoto, setPersonPhoto] = React.useState('')
    const [personFilms, setPersonFilms] = React.useState([])
    const [personFavorite, setPersonFavorite] = React.useState(false)

    const storeData = useSelector(state => state.favoriteReducer)

    React.useEffect(() => {
        (async () => {
            const id = match.params.id
            const res = await getApiResource(`${API_PERSON}/${id}/`)

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

            setPersonId(id)

            if (res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Gender', data: res.gender},
                    {title: 'Mass', data: res.mass},
                    {title: 'Eye color', data: res.eye_color},
                    {title: 'Birth year', data: res.birth_year},
                ])

                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))

                res.films.length && setPersonFilms(res.films)

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })()
    }, [])

    return (
        <>
            <PersonLinkBack/>
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>
                    <PersonPhoto
                        personId={personId}
                        personPhoto={personPhoto}
                        personName={personName}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />
                    {personInfo && <PersonInfo personInfo={personInfo}/>}

                    <Suspense fallback={<UiLoading/>}>
                        <PersonFilms personFilms={personFilms}/>
                    </Suspense>
                </div>
            </div>
        </>
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