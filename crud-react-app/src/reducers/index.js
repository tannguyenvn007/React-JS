import { combineReducers } from 'redux'
import tasks from './tasks'
const myReducer = combineReducers({
    tasks //task: task
})
export default myReducer;