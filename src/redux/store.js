import { createStore,combineReducers } from "redux";
import { rootReducers } from "./reducers/Index";
//import blogReducer from "./reducers/blogReducer"
//import {persistStore,persistReducer} from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
{/*
const persistConfig={
    key:'persist-storage',
    storage
}


const commonData={
    blog:{
        items:[{
            title:"",
            body:""
        }
        ]
    }
}

const store=createStore(persistedReducer,commonData)
export const persistor=persistStore(store)
*/}
const store=createStore(rootReducers);
export default store;