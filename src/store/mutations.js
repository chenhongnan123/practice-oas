import * as types from "./types";
import EN from "../assets/json/language.en.json"
import CN from "../assets/json/language.cn.json"
export default {
    [types.HANDLE_LOCK]:(state,payload)=>{
        state.isUnLocked = payload;
    },
    [types.HANDLE_LANGUAGE_TYPE]:(state,payLoad)=>{
        state.languageList = payLoad === "en" ? EN : CN;
    },
    [types.HANDLE_HEADER_TITLE]:(state,payLoad)=>{
        state.headerTitle = payLoad;
    },
}