import axios from "axios";

export function getUsers() {
  const options = {
    method: "GET",
    url: "http://simpleware.ddns.net:1880/nome",
  };

  return axios.request(options);
}
