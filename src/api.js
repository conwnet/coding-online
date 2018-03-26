import axios from 'axios';
import {get} from 'lodash';

const SERVER_URL = 'http://qingr.cc'; 

const handleError = error => {
    throw get(error, 'response.data', {
        code: -1,
        msg: '网络错误！'
    });
};

const http = axios.create({timeout: 3000});

const request = {
    get: url => http.get(url).catch(handleError).then(res => res.data),
    post: (url, data) => http.post(url, data).catch(handleError).then(res => res.data)
};

const postCode = data => (
    request.post(`${SERVER_URL}/run.php`, data)
);

const getStatus = id => (
    request.post(`${SERVER_URL}/check.php?id=${id}`)
);

export {postCode, getStatus};
