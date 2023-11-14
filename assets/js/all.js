import axios from 'axios';
import { url } from './config';
import { init } from './utils';


console.log(url);

axios.get(`${url}/views`)
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    })

init();