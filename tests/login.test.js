import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        { duration: '5s', target: 10 }, // Ramp up to 10 virtual users over 30 seconds
        { duration: '20s', target: 10 },   // Stay at 10 virtual users for 1 minute
        { duration: '5s', target: 0 },   // Ramp down to 0 virtual users over 30 seconds
    ],
    thresholds: {                                         // Define thresholds for performance metrics
        http_req_duration: ['p(90)<3000', 'max<5000'],   // 90% of requests should be below 3 seconds, and max should be below 5 seconds
        http_req_failed: ['rate<0.01'],                 // Less than 1% of requests should fail
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

