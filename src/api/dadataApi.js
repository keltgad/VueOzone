import axios from "axios";
const config = {
    headers: { Authorization: `Token 91d74f8036a7324dc1b3b87cab21ecb66a44db90` }
};
export default {
  getSuggestions: query => {
    return axios.get("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party",{
      ...config,
      params: {
        query
      }
    }).
    then(response => response.data)
  },
}
