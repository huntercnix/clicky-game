import axios from 'axios';

const BASEURL = 'https://api.giphy.com/v1/gifs/search?q=';
const APIKEY = '&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20';
// https://api.giphy.com/v1/gifs/search?q=&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20

export default {
	search: function(query) {
		return axios.get(BASEURL + query + APIKEY);
	}
};