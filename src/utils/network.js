import {HTTP, HTTPS} from "../constans/api";

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = url => {
    return url ? url.replace(HTTP, HTTPS) : url
}

export const getApiResource = async (url) => {
    try {
        const res = await fetch(url)

        if (!res.ok) {
            console.error('Could not fetch.', res.status)
            return false
        }

        return await res.json()
    } catch (error) {
        console.error('Could not fetch.', error.message)
        return false
    }
}

export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(async res => {
        return await fetch(res)
            .then(res => res.json())
    }))

    return res
}