import Vue from "vue";
import swal from 'sweetalert';

export default {
    success(message) 
    {
        new Noty({                       
            type: 'success',                        
            layout: 'topRight',                     
            theme: 'semanticui',                        
            text: message,
            timeout: 3000         
        }).show();
    },
    error()
    {
        new Noty({                     
            type: 'error',                      
            layout: 'topRight',                     
            theme: 'semanticui',                        
            text: message,
            timeout: 3000                
        }).show();
    },
    successModal(message)
    {
        swal("Success", message, "success");
    },
    errorModal(message)
    {
        swal("Error", message, "error");
    }
}