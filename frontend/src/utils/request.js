export function request(url, method, data) {
	return fetch(url, {
		headers: {
			'content-type': 'application/json',
			// frontend: 'true',
		},
		method: method || 'GET',
		body: data ? JSON.stringify(data) : undefined,
	}).then((res) => res.json());
}
