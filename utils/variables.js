const configLocal = JSON.parse(open('../config/config.local.json'));

export function takeBaseUrl() {
    return __ENV.BASE_URL || configLocal.baseUrl;
}