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

export function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
}

export function addComment (service_id, comment){
    const options = {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          }, 
        body: JSON.stringify({'service_id': service_id, 'comment': comment})
    }
<<<<<<< HEAD
    return fetch(BASE_URL + '/comment', options).then(res => res.json())
=======
    return fetch(`${BASE_URL}/${service_id}/comment`, options).then(res => res.json())
>>>>>>> e0c8e2c82c76462ee7aac55111c09235b142d290
}

export function deleteComment(service_id, comment_id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          },
        body: JSON.stringify({'service_id': service_id})
    }
<<<<<<< HEAD
    return fetch(BASE_URL + '/delete/' + comment_id, options).then(res => res.json())
=======
    return fetch(`${BASE_URL}/${service_id}/delete/` + comment_id, options).then(res => res.json())
>>>>>>> e0c8e2c82c76462ee7aac55111c09235b142d290
}