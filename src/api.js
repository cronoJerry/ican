const API_KEY = process.env.REACT_APP_PUBLIC_KEY;
const BASE_URL = "https://gateway.marvel.com:443";
export async function comicsApiData() {
	return await fetch(`${BASE_URL}/v1/public/comics?apikey=${API_KEY}`).then(
		(res) => res.json()
	);
}

export async function eventsApiData() {
	return await fetch(`${BASE_URL}/v1/public/events?apikey=${API_KEY}`).then(
		(res) => res.json()
	);
}
export async function comicsDetailApiData({ queryKey }) {
	const id = queryKey[1];
	return await fetch(
		`${BASE_URL}/v1/public/comics/${id}?apikey=${API_KEY}`
	).then((res) => res.json());
}
