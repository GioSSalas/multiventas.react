const session={
    auth:{
        user:false
    },
    view:{},
};

const INIT_SESSION="INIT_SESSION";
const SET_VIEW="SET_VIEW";
const DESTROY_SESSION="DESTROY_SESSION";

export default function sessionReducer(state=session,action){
    switch(action.type){
        case INIT_SESSION: return {...state,auth:action.payload}
        case DESTROY_SESSION: return {...state,auth:action.payload}
        case SET_VIEW: return {...state, view:action.payload}

        default: return {...state}
    }
}

export const InitSessionAction = (session_data) => (dispatch,getState) => {
    dispatch({
        type: INIT_SESSION,
        payload: session_data
    })
}

export const DestroySessionAction = (session_data) => (dispatch,getState) => {
    dispatch({
        type: DESTROY_SESSION,
        payload: {user:false}
    })
}

export const SetViewAction = (session_view) => (dispatch,getState) => {
    dispatch({
        type:SET_VIEW,
        payload:session_view
    })
}