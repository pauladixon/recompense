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

export function update(link) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(link)
    }
    return fetch(`${BASE_URL}/${link._id}`, options).then(res => res.json())
}


export function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
}

export function addComment(linkId, linkComment) {
    return fetch(`/api/links/${linkId}/linkComments`, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({
        body: linkComment
      })
    }).then(res => {
      // if (res.ok) return res.json();
      // // Probably a duplicate email
      // throw new Error('res');
  
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong');
      }
    }).catch((error) => {
      console.log(error)
    });
  }