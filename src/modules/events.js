import notificationService from "../services/notification";  
import genericService from "../services/generic"; 

export default {
    namespaced: true,
    state: { 
        loading: false,
        errors: null,  
        data: null,    
    },

    mutations: {
        loading(state, value) {
            state.loading = value;
        }, 
        errors(state, errors) {
            state.errors = errors;
            state.loading = false;
        },  
        setData(state, data){
            state.data = data;  
        },   
    },
    
    actions:{  
  
        add: async ({ commit, state }) => {          
            try {  
                let response = await genericService.postRequest("events", state.data);                   
                commit("setData", response);
                commit("errors", null); 
                notificationService.successModal(response.message);
            } catch (errors) {    
                if(errors.status == 400){
                    notificationService.errorModal(errors.errors.message);
                }      
                commit("errors", errors);
            }
        }, 
    }
}