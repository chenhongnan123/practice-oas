export default {
    getLockStatus:(state)=>{
        return state.isUnLocked;
    },
    getLanguageList:(state)=>{
        return state.languageList;
    },
    getHeaderTitle:(state)=>{
        return state.headerTitle;
    }
}