import { RECEIVE_CAMPUSES, GET_CAMPUS, RECEIVE_CAMPUS } from '../constants';
import axios from 'axios';

// Takes list of campuses, then sends the list to campus reducer with action.type === `RECEIVE_CAMPUSES`
export const receiveCampuses = campuses => ({
	type: RECEIVE_CAMPUSES,
	campuses
});

// Takes one campus and list of students, then sends these to campus reducer with action.type === `RECEIVE_CAMPUS`
export const receiveCampus = (campus, students) => ({
	type: RECEIVE_CAMPUS,
	campus,
	students
});

// Gets matching campus in the db (through express route) and all students with matching `campusId`, 
// then sends campus and list of students to receiveCampus action-creator above
export const getCampus = campusId => {
	return dispatch => {
		axios.get(`/api/campuses/${campusId}`)
			.then(response => {
				return response.data
			})
			.then(campus => {
				axios.get(`/api/students`)
					.then(students => {
						var studentsArr = students.data
						return studentsArr.filter(student => student.campusId === campus.id)
					})
					.then(students => {
						dispatch(receiveCampus(campus, students))
					})
			})
	}
}

// Gets all campuses in the db (through express route), 
// then sends those campuses to receiveCampuses action-creator above
export const getCampuses = () => {
	return dispatch => {
		axios.get(`/api/campuses`)
			.then(response => {
				dispatch(receiveCampuses(response.data))
			})
	}
}

// Calls the delete route in `/server/api` for deleting a campus
export const deleteCampus = campusId => {
	return dispatch => {
		axios.delete(`/api/campuses/${campusId}`)
	}
}