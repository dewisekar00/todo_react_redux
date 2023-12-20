export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_ITEM ='TOGGLE_ITEM'
export const DELETE_ITEM ='DELETE_ITEM'
export const EDIT_ADD = 'EDIT_ADD'
export const EDIT_TODO = 'EDIT_TODO'
export const FILTER_TODO = 'FILTER_TODO'

export function addTodo (todo){
    return{
        type: ADD_TODO,
        payload: todo
    }
}

export function toggleItem(itemId){
    return{
        type: TOGGLE_ITEM,
        payload: itemId, 
    }
}
export function deleteItem(itemId){
    return{
        type:  'DELETE_ITEM',
        payload: itemId
    }
    
}

export function editAdd(todo, itemId) {
    return {
        type: EDIT_ADD,
        payload: { todo, itemId }
    }
}

export function editTodo(itemId){
    return{
        type: EDIT_TODO,
        payload: itemId
    }

}


export function filterTodo(filter){
    return{
        type: FILTER_TODO,
        payload: filter
    }
}
/* 
NOTE:

-payload:data yang dikirimkan bersamaan dengan action
-type: jenis aksi


*/