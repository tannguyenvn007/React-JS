import * as types from './../constants/ActionTypes'

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var generateID = () => {
    return s4() + '-' + s4() + '-' + s4() + '-' + s4();
}
var data = JSON.parse(localStorage.getItem('task'))
var initialState = data ? data : [];  // [] Because this is data list, so we need a array to contain 

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id: generateID(),
                name: action.task.name,
                status: action.task.status
            }
            state.push(newTask);
            localStorage.setItem('task', JSON.stringify(state));
            return [...state]; // tránh được trường hợp tham chiếu vùng nhớ, ...state sẽ copy data từ state ban đầu và trả về 1 mảng mới
        default:
            return state;
    }
}
export default myReducer;