import http, { get } from 'k6/http';
import { sleep, check } from 'k6';
import { getToken } from '../helpers/authentication.js';
import { takeBaseUrl } from '../Utils/variables.js';

export const options = {
    interations: 1,
};

export default function () {
    const token = getToken();

    const url = takeBaseUrl() + '/transferencias';

    const payload = JSON.stringify({
        contaOrigem: 1,
        contaDestino: 2,
        valor: 11,
        token: ""
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    };

    let res = http.post(url, payload, params)
    check(res, {
        'Validate status code is 201': (res) => res.status === 201,
    });

    sleep(1);
};
