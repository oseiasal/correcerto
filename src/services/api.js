import axios from "axios";

const url = "http://simpleware.ddns.net:1880";

export function getUsers() {
  const options = {
    method: "GET",
    url: url + "/usuario",
  };

  return axios.request(options);
}

export function getCurriculum() {
  const options = {
    method: "GET",
    url: url + "/curriculo",
  };

  return axios.request(options);
}

export function getDesafios() {
  const options = {
    method: "GET",
    url: url + "/desafio",
  };

  return axios.request(options);
}
