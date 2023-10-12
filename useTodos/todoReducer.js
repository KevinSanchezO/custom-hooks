/*
En ocaciones no se tendra implementada la accion deseada, en estas situaciones es
bueno tener un throw error para poder indicar este caso, por ejemplo
case 'ABC':
            throw new Error('Action.type = ABC no esta implementada');

*/

export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id != action.payload);
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            });    
        default:
            return initialState;
    }
}