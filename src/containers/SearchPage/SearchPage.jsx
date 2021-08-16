import React from "react";
import PropTypes from 'prop-types'
import styles from './SearchPage.module.css'
import {getApiResource} from "../../utils/network";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import {API_SEARCH} from "../../constans/api";

const SearchPage = () => {
    const [inputSearchValue, setInputSearchValue] = React.useState('')

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH + param)
        console.log(res)
        if (res) {

        } else {
            setErrorApi(true)
        }
    }

    const handleInputChange = (event) => {
        const value = event.target.value
        setInputSearchValue(value)
        getResponse(value)
    }

    return (
        <>
            <h1 className='header__text'>Search</h1>
            <input
                type="text"
                value={inputSearchValue}
                onChange={(event) => handleInputChange(event)}
                placeholder='Input characters name'
            />
        </>
    )
}

SearchPage.propTypes = {
    setErrorApi:PropTypes.func
}

export default withErrorApi(SearchPage)