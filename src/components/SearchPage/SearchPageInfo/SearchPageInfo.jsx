import React from "react";
import PropTypes from 'prop-types'
import styles from './SearchPage.module.css'
import {getApiResource} from "../../../utils/network";
import {withErrorApi} from "../../../hoc-helpers/withErrorApi";
import {API_SEARCH} from "../../../constans/api";
import {getPeopleId, getPeopleImage} from "../../../services/getPeopleData";
import PeopleList from "../../PeoplePage/PeopleList";

const SearchPage = ({setErrorApi}) => {


    return (
        <>
           SearchPage
        </>
    )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage)