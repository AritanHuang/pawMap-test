import axios from "axios";
import { url, list } from './config';
let data = [];
export function init() {
    axios.get(`${url}/views`)
        .then(function (res) {
            data = res.data;
            renderData();
        })
        .catch(function (err) {
            console.log(err);
        })
}

let str = '';
function renderData() {
    data.forEach(function (item) {
        str += `<li>${item.description}</li>`;
    })
    list.innerHTML = str;
}