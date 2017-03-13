/*
import request from '../utils/request';
import restApi from "restApi";

export function fetch(pg,pg_size) {
  return request(`/api/users?_page=${pg}&_limit=${pg_size}`);
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE'
  });
}

export function patch(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values)
  });
}

export function create(values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values)
  });
}

export function login(params){
  params.url = restApi.logon;
  return request(params);
}
*/

import conf from "../config"

const user = {
  login:conf.SERVICE_HOST + "/api/route/v1/login"
};

export default user;
