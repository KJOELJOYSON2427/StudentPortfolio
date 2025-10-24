import { subscribe } from "diagnostics_channel";
import { Action } from "./types/actionTypes";

interface ContactFormState {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  errors: Record<string, string>; // or use a more specific type if needed
  isSubmitting: boolean;
  submitSuccess: boolean;
}
export const createStore=()=>{
    let state:ContactFormState ={
        formData:{
            name:'',
            email:'',
            message:''
        },
        errors:{},
        isSubmitting:false,
        submitSuccess:false
    }
    const listeners:Array<()=> void>=[];   
    return {
        getState: ()=>state,

        dispatch: (action:Action)=>{
            switch(action.type){
                case 'form/updateField':
                    state={
                      ...state,
                      formData:{
                         ...state.formData,
                         [action.payload.field]:action.payload.value
                      }


                    };
                  break;  
                case 'form/setErrors':
                    state={
                        ...state,
                        errors:action.payload
                    }  
                    break;
                case 'form/submitSuccess':
                    state={
                        ...state,
                        submitSuccess:true,
                        isSubmitting:false,
                        formData:{
                            name:'',
                            email:'',
                            message:''
                        }
                    } 
                case 'form/resetSuccess':
                    state = { ...state, submitSuccess: false };
                     break;      
                default:
                    break;      
            }

          listeners.forEach(listener=>listener())

        },

        subscribe:(listener:()=>void)=>{
               listeners.push(listener);

               return ()=>{
                  const index =listeners.indexOf(listener);
                  if (index > -1) listeners.splice(index,1);
               }
        }
    }
}



export const store =createStore()