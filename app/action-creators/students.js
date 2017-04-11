import { RECEIVE_STUDENTS, RECEIVE_STUDENT, GET_STUDENT, GET_STUDENTS, ADD_STUDENT } from '../constants';
import axios from 'axios';

export const receiveStudents = students => ({
	type: RECEIVE_STUDENTS,
	students
});

export const receiveStudent = (student, campus) => ({
	type: RECEIVE_STUDENT,
	student,
	campus
});

export const getStudent = studentId => {
	return dispatch => {
		axios.get(`/api/students/${studentId}`)
			.then(response => {
				return response.data
			})
			.then(student => {
				console.log(student)
				axios.get(`/api/campuses/${student.campusId}`)
					.then(campus => {
						dispatch(receiveStudent(student, campus.data))
					})
			})
	}
}

export const getStudents = () => {
	return dispatch => {
		axios.get(`/api/students`)
			.then(response => {
				dispatch(receiveStudents(response.data))
			})
	}
}

export const addStudent = studentObj => {
	console.log("add student is fired", studentObj)
	return (dispatch) => {
		console.log("IN THE ACTION CREATOR", studentObj)
		axios.post(`/api/students`, studentObj)
			.then(() => dispatch(getStudents()))
	}
}

export const deleteStudent = studentId => {
	return dispatch => {
		console.log('deleteStudent hit in action-creators with student', studentId)
		axios.delete(`/api/students/${studentId}`)
			.then(() => dispatch(getStudents()))
	}
}