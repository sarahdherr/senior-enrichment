import { connect } from 'react-redux';

import Student from '../components/Student';

// Adds selected student and student's campus to the <Student /> props
const mapStateToProps = (state) => {
	return {
		selectedStudent: state.students.selected,
		selectedCampus: state.students.campus
	}
}

const StudentContainer = connect(mapStateToProps)(Student);

export default StudentContainer;