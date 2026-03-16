import http from 'k6/http';
import { takeBaseUrl } from '../Utils/variables.js';

const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export function getToken() {
    const url = takeBaseUrl() + '/login';
    
       const payload = JSON.stringify(postLogin);
    
        const params = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        const res = http.post(url, payload, params);

        return res.json('token');
    }