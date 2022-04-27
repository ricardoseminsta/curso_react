import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import qs from 'qs'

const BASEAPI = 'https://api.b7web.com.br:501';

//const navigate = useNavigate();

const apiFetchPost = async (endpoint, body) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token; 
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const json = await res.json();

    if(json.notallowed) {
        //navigate('/signin');
        window.location.href = '/signin';
    }

    return json;
}

const apiFetchGet = async (endpoint, body = []) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token; 
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if(json.notallowed) {
        //navigate('/signin');
        window.location.href= '/signin';
    }

    return json;
}


const OlxApi = {
    
    login: async (email, password) => {
        const json = await apiFetchPost(
            '/user/signin',
            {email, password}
        );
        return json;
    },
    getStates: async () => {
        const json = await apiFetchGet(
            '/states'
        );
        return json.states;
    }
};

export default () => OlxApi;