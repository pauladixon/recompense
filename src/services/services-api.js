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
            'Content-type': 'application/json',
            'Authorization':  'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(service)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function update(service) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(service)
    }
    return fetch(`${BASE_URL}/${service._id}`, options).then(res => res.json())
}

export function getOne(service) {
    return fetch(`${BASE_URL}/${service._id}`).then(res => res.json())
}

export function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
}

export function addComment (service_id, serviceComment){
    const options = {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          }, 
        body: JSON.stringify({'service_id': service_id, 'serviceComment': serviceComment})
    }
    return fetch(`${BASE_URL}/${service_id}/comment`, options).then(res => res.json())
}

export function deleteComment(service_id, serviceComment_id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          },
        body: JSON.stringify({'service_id': service_id})
    }
    return fetch(`${BASE_URL}/delete/${serviceComment_id}`, options).then(res => res.json())
}