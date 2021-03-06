import React from "react";
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import Loader from "../../Loaders/Loader";
import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'
import styles from './PersonPhoto.module.css'
import {setPersonToFavorite, removePersonFromFavorite} from "../../../store/actions";

const PersonPhoto = ({personId, personPhoto, personName, personFavorite, setPersonFavorite}) => {

    const dispatch = useDispatch()

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId))
            setPersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                }
            }))
            setPersonFavorite(true)
        }
    }

    if (!personPhoto) {
        return <Loader/>
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName}/>
                <img
                    className={styles.favorite_img}
                    src={personFavorite ? iconFavoriteFill : iconFavorite}
                    onClick={dispatchFavoritePeople}
                    alt="Add to favorite"/>
            </div>
        </>
    )
}

PersonPhoto.defaultProps = {
    personPhoto: '',
    personName: ''
}

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
}

export default PersonPhoto