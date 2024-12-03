const initialState = {
    projects : [],
    loading: false,
    error : null,
}

export const ProjectsUserWithReducer = (state=initialState,action) =>{
    switch(action.type){
        case "REQUEST_SENDED":
            return {...state,loading:true,error:null}

        case "REQUEST_SUCCESS_WITH_PROJECTS":
            return {...state,loading:false,projects:action.payload}

        case "REQUEST_SENDED_WITH_ERROR":
            return {...state,loading:false,error:action.payload}
            
        case "EXIT_PROJECT":
            return {...state,projects:action.payload}
        
        case "DELETING":
            return {...state}

        case "LOGOUT":
            return initialState;

        default:
            return state;
    }
}