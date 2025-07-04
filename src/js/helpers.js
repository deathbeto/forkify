import { TIMEOUT_SEC } from './config.js';


const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`La petición tardó demasiado. Timeout tras ${s} segundos`));
        }, s * 1000);
    });
};

export const getJSON = async function (url) {
    try {
        const fetchPro = fetch(url);
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);

        return data;
    } catch (error) {
        throw error;
    }
};

export { timeout };
