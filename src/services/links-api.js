import tokenService from '../../src/utils/tokenService'

const BASE_URL = '/api/links'

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json())
}

export function create(link) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization':  'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(link)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

// export function update(link) {
//     const options = {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         },
//         body: JSON.stringify(link)
//     }
//     return fetch(`${BASE_URL}/${link._id}`, options).then(res => res.json())
// }

// export function deleteOne(id) {
//     const options = {
//         method: 'DELETE',
//         headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
//     }
//     return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
// }