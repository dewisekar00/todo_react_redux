export const ADD_TODO = 'ADD_TODO';
export const TOOGLE_ITEM ='TOGGLE_ITEM'
export const DELETE_ITEM ='DELETE_ITEM'

export function addTodo (todo){
    return{
        type: ADD_TODO,
        payload: todo
    }
}

export function toggleItem(itemId){
    return{
        type: 'TOGGLE_ITEM',
        payload: itemId, 
    }
}
export function deleteItem(itemId){
    return{
        type:  'DELETE_ITEM',
        payload: itemId
    }
}
/* 
NOTE:

-payload:data yang dikirimkan bersamaan dengan action
-type: jenis aksi


*/