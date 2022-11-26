const SERVER_URL = "http://134.214.147.115/gr3_4";
export async function get(action, params = {}) {
    let paramStr = '';

    let i = 0;
    for (let key in params) {
        if (i == 0) {
            paramStr += '?';
        } else {
            paramStr += '&';
        }
        paramStr += key + '=' + params[key];
        i++;
    }

    let res = null;
    try {
        const response = await fetch(SERVER_URL + action + paramStr, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        if (!response.ok) {
            res = {
                status: 'failed',
                error: 'went_wrong',
            };
        } else {
            res = await response.json();
        }
    } catch (error) {
        res = {
            status: 'failed',
            error: 'went_wrong',
        };
    }
    return res;
}