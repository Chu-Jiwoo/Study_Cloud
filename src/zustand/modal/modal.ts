import createStore from 'zustand';


const useStore = createStore<any>(set=>({
    modal : false,
    modal_text : '텍스트 입니다.',
    set_modal : ()=> set(state => ({modal : !state.modal})),
    set_modal_text : (text)=> set(state => ({modal_text : text}))
}))

export default useStore;