import React from "react";
import {getApiResource, changeHTTP} from "../../utils/network";
import {API_PEOPLE} from "../../constans/api";
import {getPeopleId, getPeopleImage, getPeoplePageId} from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import PropTypes from 'prop-types'
import {useQueryParams} from "../../hooks/useQueryParams";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation";

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = React.useState(null)
    const [prevPage, setPrevPage] = React.useState(null)
    const [nextPage, setNextPage] = React.useState(null)
    const [counterPage, setCounterPage] = React.useState(1)

    const query = useQueryParams()
    const queryPage = query.get('page')

    const getResource = async (url) => {
        const res = await getApiResource(url)
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
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getPeoplePageId(url))
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }

    }

    React.useEffect(() => {
        getResource(API_PEOPLE + queryPage)
    }, [])

    return (
        <>
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people}/>}
        </>
    )
}

PeoplePage.propsTypes = {
    setErrorApi: PropTypes.func
}
export default withErrorApi(PeoplePage)