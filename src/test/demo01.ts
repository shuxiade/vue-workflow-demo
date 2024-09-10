import axios, {type AxiosRequestConfig} from "axios";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

function a(){

    new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: "http://localhost:13200/test/form6",
            responseType: 'json',
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            timeout: 30000,
            family:4,
            fetchOptions:{"1":1},

        }).then(res => {
            resolve(res.data);
        }).catch(err=>{
            reject(err);
        })
    }).then(value => {
        console.log(value)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        console.log("执行完毕")
    })
}


a();



