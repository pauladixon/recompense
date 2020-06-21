import tokenService from '../../src/utils/tokenService'

const BASE_URL = '/api/requests'

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json())
}

export function create(request) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization':  'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(request)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function update(request) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(request)
    }
    return fetch(`${BASE_URL}/${request._id}`, options).then(res => res.json())
}

export function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
}