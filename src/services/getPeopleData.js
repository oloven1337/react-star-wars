import {
    GUIDE_IMG_EXTENSION,
    HTTPS,
    SWAPI_PARAM_PAGE,
    SWAPI_PEOPLE,
    SWAPI_ROOT,
    URL_IMG_PERSON
} from "../constans/api";

export const getPeoplePageId = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE)
    const id = url.slice(pos + SWAPI_PARAM_PAGE.length)

    return Number(id)
}

const getId = (url, category) => {
    return url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '')
}

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = (id) => `${URL_IMG_PERSON}${id}${GUIDE_IMG_EXTENSION}`
