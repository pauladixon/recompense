import tokenService from '../../src/utils/tokenService'

const BASE_URL = '/api/requests'

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json())
}

export function getOne(request) {
    return fetch(`${BASE_URL}/${request._id}`).then(res => res.json())
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

export function addComment (request_id, requestComment){
    const options = {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          }, 
        body: JSON.stringify({'request_id': request_id, 'requestComment': requestComment})
    }
    return fetch(`${BASE_URL}/${request_id}/comment`, options).then(res => res.json())
}

export function deleteComment(request_id, requestComment_id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          },
        body: JSON.stringify({'request_id': request_id})
    }
    return fetch(`${BASE_URL}/delete/${requestComment_id}`, options).then(res => res.json())
}