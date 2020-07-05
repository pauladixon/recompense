const BASE_URL = '/api/linkComments';

function create(linkComment) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(linkComment),
	}).then(async res => {
        const anything = res.json()
        return anything;
    });
}

export default {
    create
};