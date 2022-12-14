import axios from 'axios';

const apiKey = "FPPOlksZZAIFyWayBGT6XTkT1JFdZWPY5jP_ePzKvTM";

let unsplashService = {
  endpoint: `https://api.unsplash.com/search/photos`,
};

const search = (query) => {
  console.log("search is firing");
  const config = {
    method: "GET",
    url: unsplashService.endpoint + `/?query=${query}&client_id=${apiKey}`,
    headers: { "Content-Type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

export { search };