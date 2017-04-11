import { RECEIVE_CAMPUSES, GET_CAMPUS, RECEIVE_CAMPUS } from '../constants';
import axios from 'axios';

export const receiveCampuses = campuses => ({
	type: RECEIVE_CAMPUSES,
	campuses
});

export const receiveCampus = (campus, students) => ({
	type: RECEIVE_CAMPUS,
	campus,
	students
});

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

export const getCampuses = () => {
	return dispatch => {
		axios.get(`/api/campuses`)
			.then(response => {
				dispatch(receiveCampuses(response.data))
			})
	}
}

export const deleteCampus = campusId => {
	return dispatch => {
		axios.delete(`/api/campuses/${campusId}`)
	}
}