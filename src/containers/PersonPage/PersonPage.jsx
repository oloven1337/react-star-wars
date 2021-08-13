import React, {Suspense, lazy} from "react";
import PropTypes from 'prop-types'
import {getApiResource} from "../../utils/network";
import {API_PERSON} from "../../constans/api";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import {getPeopleImage} from '../../services/getPeopleData'
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack'
// import PersonFilms from "../../components/PersonPage/PersonFilms";
import UiLoading from "../../components/UI/UiLoading";


import styles from './PersonPage.module.css'
import Loader from "../../components/Loaders/Loader";

const PersonPage = ({match, setErrorApi}) => {

    const PersonFilms = lazy(() => import('../../components/PersonPage/PersonFilms'))

    const [personInfo, setPersonInfo] = React.useState([])
    const [personName, setPersonName] = React.useState('')
    const [personPhoto, setPersonPhoto] = React.useState('')
    const [personFilms, setPersonFilms] = React.useState([])

    React.useEffect(() => {
        (async () => {
            const id = match.params.id
            const res = await getApiResource(`${API_PERSON}/${id}/`)

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
                        personPhoto={personPhoto}
                        personName={personName}
                    />
                    {personInfo && <PersonInfo personInfo={personInfo}/>}

                    {/*{PersonFilms && (*/}
                    {/*    <UiLoading/>*/}
                    {/*)}*/}

                    <Suspense fallback={<UiLoading/>}>
                        <PersonFilms personFilms={personFilms}/>
                    </Suspense>

                    {/*{personFilms ?  <PersonFilms personFilms={personFilms}/> : <Loader/>}*/}

                    {/*{personFilms && <PersonFilms personFilms={personFilms}/>}*/}

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