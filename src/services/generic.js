import api from "./api";

export default {    

    postRequest(endpoint, data){  
        return new Promise((resolve, reject) => {
            api.post(
                endpoint, 
                data
            ).then(response => {  
                return resolve(response);
            }).catch((status, error) => { 
                reject(status, error);
            });
        });
    }, 
}