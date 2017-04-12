import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS } from '../constants';

// inital state of selected campus, list of students for a selected campus, and list of all campuses
const initialCampusState = {
	selected: {},
	filteredStudents: [],
	list: []
}

export default function (state = initialCampusState, action) {
	const newState = Object.assign({}, state)

	switch (action.type) {
		
		case RECEIVE_CAMPUSES:
			newState.list = action.campuses;
			break;

		case RECEIVE_CAMPUS:
			newState.selected = action.campus;
			newState.filteredStudents = action.students;
			break;

		default:
			newState;
			break;

	}

	return newState;
}