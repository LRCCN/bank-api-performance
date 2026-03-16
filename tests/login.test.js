import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    iterations: 50,
    thresholds: { // Define thresholds for performance metrics
        http_req_duration: ['p(90)<10', 'max<1'],
        http_req_failed: ['rate<0.01'],
    },
};

export default function () {
    const url = 'http://localhost:3000/login';
    const payload = JSON.stringify({
        username: 'luiz.neto',
        senha: '123456',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);
    check(res, {
        'Validate status code is 200': (r) => r.status === 200,
        'Validate token is string': (r) => typeof r.json().token === 'string',

    });

    sleep(1);
}

