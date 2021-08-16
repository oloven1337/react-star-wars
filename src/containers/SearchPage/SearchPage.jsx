import React, {useCallback} from "react";
import PropTypes from 'prop-types'
import styles from './SearchPage.module.css'
import {getApiResource} from "../../utils/network";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import {API_SEARCH} from "../../constans/api";
import {getPeopleId, getPeopleImage} from "../../services/getPeopleData";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";
import UiInput from "../../components/UI/UiInput";
import {debounce} from 'lodash'

const SearchPage = ({setErrorApi}) => {
    const [inputSearchValue, setInputSearchValue] = React.useState('')
    const [people, setPeople] = React.useState([])

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH + param)

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    img
                }
            })

            setPeople(peopleList)

            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    React.useEffect(() => {
        getResponse('')
    }, [])

    const debouncedGetResponse = React.useCallback(
        debounce(value => getResponse(value), 300),
        []
    )

    const handleInputChange = value => {
        setInputSearchValue(value)
        debouncedGetResponse(value)
    }

    return (
        <>
            <h1 className='header__text'>Search</h1>

            <UiInput
                value={inputSearchValue}
                handleInputChange={(event) => handleInputChange(event)}
                placeholder='Input characters name'
                classes={styles.input__search}
            />

            <SearchPageInfo people={people}/>
        </>
    )
}

SearchPage.propTypes =
    {
        setErrorApi: PropTypes.func
    }

export default withErrorApi(SearchPage)