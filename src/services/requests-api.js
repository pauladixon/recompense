import tokenService from '../../src/utils/tokenService'

const BASE_URL = '/api/requests'

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json())
}

export function create(linkrequest) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization':  'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(linkrequest)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}