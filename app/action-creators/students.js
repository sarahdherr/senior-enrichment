import { RECEIVE_STUDENTS, RECEIVE_STUDENT, GET_STUDENT, GET_STUDENTS, ADD_STUDENT } from '../constants';
import axios from 'axios';

// Takes list of students, then sends the list to student reducer with action.type === `RECEIVE_STUDENTS`
export const receiveStudents = students => ({
	type: RECEIVE_STUDENTS,
	students
});

// Takes one student and one campus, then sends these to student reducer with action.type === `RECEIVE_STUDENT`
export const receiveStudent = (student, campus) => ({
	type: RECEIVE_STUDENT,
	student,
	campus
});

// Gets matching student in the db (through express route) and student's campus, 
// then sends student and campus to receiveStudent action-creator above
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

// Gets all students in the db (through express route), 
// then sends those students to receiveStudents action-creator above
export const getStudents = () => {
	return dispatch => {
		axios.get(`/api/students`)
			.then(response => {
				dispatch(receiveStudents(response.data))
			})
	}
}

// Add a student to the db (through express route), then get all students again
// ** Did not actually use this action-creator, was unable to get to the axios request for some reason so I made the axios request in the actual react form component
export const addStudent = studentObj => {
	return (dispatch) => {
		axios.post(`/api/students`, studentObj)
			.then(() => dispatch(getStudents()))
	}
}

// Calls the delete route in `/server/api` for deleting a student
export const deleteStudent = studentId => {
	return dispatch => {
		console.log('deleteStudent hit in action-creators with student', studentId)
		axios.delete(`/api/students/${studentId}`)
			.then(() => dispatch(getStudents()))
	}
}