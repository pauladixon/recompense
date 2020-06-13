import tokenService from '../../src/utils/tokenService'

const BASE_URL = '/api/services'

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

export function create(service) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'applications/json',
            'Authorization':  'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(service)
    }
    return fetch(BASE_URL, options).then(res => res.json)
}

export function update(service) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'applications/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(service)
    }
    return fetch(`${BASE_URL}/${service._id}`, options).then(res => res.json())
}

export function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
}