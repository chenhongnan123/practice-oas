import * as types from "./types";
export default {
    handleLock:({commit},payLoad)=>{
        commit(types.HANDLE_LOCK,payLoad);
    },
    handleLanguage:({commit},payLoad)=>{
        commit(types.HANDLE_LANGUAGE_TYPE,payLoad);
    },
    handleHeaderTitle:({commit},payLoad)=>{
        commit(types.HANDLE_HEADER_TITLE,payLoad);
    },
}