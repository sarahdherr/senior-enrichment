import { combineReducers } from 'redux'

import campusReducer from './campuses-reducer'
import studentReducer from './students-reducer'

export default combineReducers({
	campuses: campusReducer,
	students: studentReducer
})
