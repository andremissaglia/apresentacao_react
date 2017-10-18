const initialState = {
    todos: [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                    }
                ]
            }
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter(
                    todo => (todo.id !== action.id)
                )
            };
        default:
            return state
    }
}

export default reducer;